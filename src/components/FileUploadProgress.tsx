import { Progress, Text } from "@mantine/core";
import { useState, useEffect } from "react";
import { checkUploadStatus } from "../utils/api";

function FileUploadProgress({ taskId }: { taskId: string }) {
  const [progress, setProgress] = useState<number>(0);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const status = await checkUploadStatus(taskId);
        setProgress(status.progress);

        if (status.progress === 100) {
          setIsComplete(true);
          clearInterval(interval);
        }
      } catch (error) {
        console.error("Error checking upload status:", error);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [taskId]);

  return (
    <div style={{ marginTop: "16px", width: "100%" }}>
      <Progress
        value={progress}
        size="lg"
      />
      {isComplete && <Text color="green">Upload Complete!</Text>}
    </div>
  );
}

export default FileUploadProgress;
