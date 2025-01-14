import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Timer from "@/pages/Timer";
import TimerEnd from "@/pages/TimerEnd";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/timer" element={<Timer />} />
      <Route path="/end" element={<TimerEnd />} />
    </Routes>
  );
};

export default App;
