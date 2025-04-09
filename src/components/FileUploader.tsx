import { Group, FileInput, Input, Button, Image, Text } from "@mantine/core";
import UploadIcon from "../assets/upload.svg";
import { useState } from "react";
import {
  AcceptedFileTypes,
  AcceptedImageFileTypes,
  MinImageFileSize,
} from "../utils/constants";

function FileUploader() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const validateFileSelection = (file: File | null) => {
    if (!file) return;

    debugger;
    if (
      file.size < MinImageFileSize &&
      AcceptedImageFileTypes.includes(file.type)
    ) {
      setError("Image size must be greater than 2MB.");
      return;
    }

    setError(null);
    setSelectedFile(file);
  };

  return (
    <Group
      justify="flex-start"
      align="center"
      w="100%"
      wrap="nowrap"
      style={{ padding: "16px" }}
    >
      <FileInput
        variant="filled"
        label="File"
        description="Choose a file to upload"
        placeholder="Select a file"
        accept={AcceptedFileTypes.join(",")}
        styles={{
          label: { color: "#1a1a1a", fontSize: "1.5rem" },
          description: { color: "#1a1a1a" },
          placeholder: { fontSize: "0.75rem" },
          error: { color: "red" },
        }}
        onChange={validateFileSelection}
        error={error}
      />
      <Button
        variant="filled"
        fullWidth
        style={{ backgroundColor: "#fff", color: "#1a1a1a" }}
        onClick={() => console.log("uploading File started")}
        hidden={error !== null}
      >
        <Group>
          <Image src={UploadIcon} />
          <Text>Upload</Text>
        </Group>
      </Button>
    </Group>
  );
}

export default FileUploader;
