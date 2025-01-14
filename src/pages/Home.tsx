import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-b from-[#2C2F3D] to-[#1C1F2A]">
      <h1 className="text-4xl font-bold text-[#F26442] mb-10">
        ingstory Timer
      </h1>
      <Button
        onClick={() => navigate("/timer")}
        size="lg"
        variant="default"
        textColor="text-white"
      >
        Start
      </Button>
    </div>
  );
};

export default Home;
