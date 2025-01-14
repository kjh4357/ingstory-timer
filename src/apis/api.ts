import axiosInstance from "@/lib/axiosInstance";
import { TimeApiResponse } from "@/types/timer";

export const fetchGetTime = async (): Promise<TimeApiResponse> => {
  const response = await axiosInstance.get<TimeApiResponse>("");
  return response.data;
};
