export enum UploadStatus {
  Starting,
  InProgress,
  Completed,
  Failed,
  Cancelled,
}

export const AcceptedImageFileTypes = ["image/png", "image/jpeg", "image/jpg"];

export const AcceptedFileTypes = AcceptedImageFileTypes.concat([
  "application/pdf",
]);

export const MinImageFileSize = 2 * 1024 * 1024; // 2 MB
