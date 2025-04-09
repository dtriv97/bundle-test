import { Group, FileInput, Input, Button } from "@mantine/core";

function FileUploader() {
  return (
    <Group
      justify={"space-between"}
      w={"100%"}
    >
      <FileInput />
      <Input disabled />
      <Button>Upload</Button>
    </Group>
  );
}

export default FileUploader;
