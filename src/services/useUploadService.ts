import { useState } from "react";
import {
  UploadFileService,
  UploadFileServiceResponse,
} from "../services/uploadService";

interface UploadResponse {
  taskId: string;
}

export const useUploadService = () => {
  const [taskId, setTaskId] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [currentUploadService, setCurrentUploadService] =
    useState<UploadFileServiceResponse | null>(null);

  const startUpload = (file: File): UploadResponse => {
    if (currentUploadService != null) {
      throw new Error("Upload already in progress");
    }

    setCurrentUploadService(
      UploadFileService(file, ({ progress, status }) => {
        setProgress(progress);
        console.log(status);
      })
    );

    const newTaskId = Math.random().toString(36).substring(2, 15);
    setTaskId(newTaskId);
    return { taskId: newTaskId };
  };

  return {
    startUpload,
  };
};
