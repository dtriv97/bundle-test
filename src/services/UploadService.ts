export enum UploadStatus {
  Starting,
  InProgress,
  Completed,
  Failed,
  Cancelled,
}

interface UploadProgress {
  progress: number;
  status: UploadStatus;
}

export type UploadFileServiceResponse = Promise<UploadProgress>;

export function UploadFileService(
  file: File,
  onProgress?: (progress: UploadProgress) => void
): UploadFileServiceResponse {
  return new Promise<UploadProgress>((resolve, reject) => {
    const totalDuration = Math.random() * 5000 + 5000;
    const failureChance = Math.random();

    let progress = 0;
    let intervalId: ReturnType<typeof setInterval>;
    let status = UploadStatus.Starting;

    // Create an AbortController for cancellation
    const controller = new AbortController();
    const { signal } = controller;

    onProgress?.({ progress, status });

    // Simulate upload progress
    intervalId = setInterval(() => {
      if (signal.aborted) {
        clearInterval(intervalId);
        reject(new Error("Upload cancelled"));
        return;
      }

      progress += 2;

      if (progress > 10 && status != UploadStatus.InProgress) {
        status = UploadStatus.InProgress;
        onProgress?.({ progress, status });
      }

      if (failureChance < 0.1 && progress > 30) {
        clearInterval(intervalId);
        reject(new Error("Network failure"));
        return;
      }

      if (progress >= 100) {
        clearInterval(intervalId);
        onProgress?.({ progress: 100, status: UploadStatus.Completed });
        resolve({ progress: 100, status: UploadStatus.Completed });
      }
    }, totalDuration / 50);

    // Expose abort method
    return {
      abort: () => controller.abort(),
      onProgress,
    };
  });
}
