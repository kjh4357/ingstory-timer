import React from "react";
import SpinnerSVG from "@/assets/images/img_spinner.svg?react";
interface SpinnerProps {
  size?: number;
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size, color }) => {
  return (
    <div className="fixed left-0 top-0 w-full h-full bg-black/75 justify-center items-center flex">
      <SpinnerSVG width={size} height={size} className={color} />
    </div>
  );
};

export default Spinner;
