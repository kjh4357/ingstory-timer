import React, { useState, useEffect, useRef } from "react";
import { formatTime } from "@/lib/utils";

interface CircularTimerProps {
  timeLimit: number;
  onComplete: () => void; // 타이머 완료 시 호출
}

const CircularTimer: React.FC<CircularTimerProps> = ({
  timeLimit,
  onComplete,
}) => {
  const [remainingTime, setRemainingTime] = useState(timeLimit);
  const radius = 90;
  const circumference = 2 * Math.PI * radius;

  const startTimeRef = useRef<number | null>(null); // 타이머 시작 시간
  const intervalRef = useRef<number | null>(null); // Interval 참조

  useEffect(() => {
    const startTimer = () => {
      startTimeRef.current = Date.now(); // 타이머 시작 시간 기록
      intervalRef.current = setInterval(() => {
        updateRemainingTime();
      }, 1000);
    };

    const updateRemainingTime = () => {
      if (startTimeRef.current !== null) {
        const elapsedTime = Math.floor(
          (Date.now() - startTimeRef.current) / 1000
        ); // 경과 시간 계산
        const newRemainingTime = Math.max(timeLimit - elapsedTime, 0);

        setRemainingTime(newRemainingTime);

        if (newRemainingTime <= 0) {
          clearInterval(intervalRef.current!);
          onComplete(); // 타이머 종료 시 부모 컴포넌트에 알림
        }
      }
    };

    startTimer();

    // 페이지 포커스 상태 변경 감지
    const handleVisibilityChange = () => {
      if (!document.hidden && startTimeRef.current !== null) {
        updateRemainingTime(); // 포커스 복구 시 즉시 업데이트
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(intervalRef.current!);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [timeLimit, onComplete]);

  // 진행률 계산
  const progress = (timeLimit - remainingTime) / timeLimit;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <div className="relative flex items-center justify-center h-64 w-64">
      <div className="relative flex items-center justify-center h-52 w-52">
        <svg className="absolute w-full h-full" viewBox="0 0 200 200">
          {/* 배경 원 */}
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke="gray"
            strokeWidth="1"
          />
          <circle
            cx="100"
            cy="100"
            r={radius - 10}
            fill="url(#circle-gradient)"
          />
          {/* 진행 원 */}
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="6"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform="rotate(-90 100 100)"
            style={{
              transition: "stroke-dashoffset 0.2s ease-in-out",
            }}
          />
          {/* 점 */}
          <circle
            cx="100"
            cy="100"
            r="3"
            fill="url(#gradient)"
            className="animate-dot"
          />
          {/* 그라디언트 정의 */}
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F26442" />
              <stop offset="100%" stopColor="#FFC842" />
            </linearGradient>
            <linearGradient id="circle-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2C2F3D" />
              <stop offset="100%" stopColor="#1C1F2A" />
            </linearGradient>
          </defs>
        </svg>

        {/* 타이머 시간 */}
        <h1
          className={`absolute text-2xl transition-all ease-in-out ${
            remainingTime <= 10 ? "text-[#F26442] text-4xl" : "text-white"
          }`}
        >
          {formatTime(remainingTime)}
        </h1>
      </div>
    </div>
  );
};

export default CircularTimer;
