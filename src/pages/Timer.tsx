/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CircularTimer from "@/components/CircularTimer";
import { convertDurationToSeconds } from "@/lib/utils";
import { fetchGetTime } from "@/apis/api";
import Spinner from "@/components/Spinner";
import { useModal } from "@/hooks/useModal";

const Timer: React.FC = () => {
  const [isFetching, setIsFetching] = useState(false); // 로딩 상태
  const [timeLimit, setTimeLimit] = useState<number | null>(null); // 타이머 시간
  const { showModal } = useModal();
  const navigate = useNavigate();

  useEffect(() => {
    getTime();
  }, []);

  // 타이머 시간 가져오기
  const getTime = async () => {
    setIsFetching(true);
    try {
      const timeData = await fetchGetTime();
      const seconds = convertDurationToSeconds(timeData.duration);
      setTimeLimit(seconds);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        showModal(`${error.status} error`, error.message, () => {
          closeErrorPopup();
        });
      }
    } finally {
      setIsFetching(false);
    }
  };

  const closeErrorPopup = () => {
    navigate("/");
    setTimeLimit(null);
  };

  const handleComplete = () => {
    setTimeout(() => {
      navigate("/end");
    }, 0);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-b from-[#2C2F3D] to-[#1C1F2A]">
      {isFetching && <Spinner size={150} color="text-[#F26442]" />}

      {timeLimit ? (
        <CircularTimer timeLimit={timeLimit} onComplete={handleComplete} />
      ) : (
        <p className="text-white text-lg">타이머를 준비 중입니다...</p>
      )}
    </div>
  );
};

export default Timer;
