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
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          onComplete(); // 타이머 종료 시 부모로 알림
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [onComplete]);

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
