import { UploadStatus } from "../services/UploadService";
import { useUploadService } from "../services/useUploadService";

interface UploadStartResponse {
  taskId: string;
}

interface UploadStatusResponse {
  status: UploadStatus;
  progress: number;
}

export const startFileUpload = async (
  file: File
): Promise<UploadStartResponse> => {
  const { startUpload } = useUploadService();
  const { taskId } = startUpload(file);

  return {
    taskId,
  };
};

export const checkUploadStatus = async (
  taskId: string
): Promise<UploadStatusResponse> => {
  return new Promise((resolve) => {
    const { checkProgress } = useUploadService();
    const { progress, status } = checkProgress(taskId);

    resolve({ progress, status });
  });
};
