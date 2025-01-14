import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertDurationToSeconds = (time: string): number => {
  const parts = time.split(":").map(Number).reverse();
  let seconds = 0;

  if (parts.length > 3 || parts.some(isNaN)) {
    throw new Error(
      "Invalid time format. Expected 'HH:MM:SS', 'MM:SS', or 'SS'."
    );
  }

  if (parts[0]) seconds += parts[0];
  if (parts[1]) seconds += parts[1] * 60;
  if (parts[2]) seconds += parts[2] * 3600;

  return seconds;
};
export const formatTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  if (seconds >= 3600) {
    // 입력값이 3600 이상인 경우 HH:MM:SS 형식
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  }
  // 입력값이 3600 미만인 경우 MM:SS 형식
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};
