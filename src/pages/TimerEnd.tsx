import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TimerEnd: React.FC = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setTimeout(() => navigate("/"), 0);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-b from-[#2C2F3D] to-[#1C1F2A]">
      <h1 className="text-5xl font-bold text-[#F26442]">Done</h1>
      <p className="text-lg mt-2 text-white">Go home in {countdown} seconds.</p>
    </div>
  );
};

export default TimerEnd;
