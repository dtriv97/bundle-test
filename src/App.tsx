import "./App.css";
import { Card, Stack, Title, MantineProvider } from "@mantine/core";
import FileUploader from "./components/FileUploader";

function App() {
  return (
    <MantineProvider>
      <Stack>
        <Card
          style={{
            backgroundColor: "#f0f0f0",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <Title
            order={1}
            c={"#1a1a1a"}
          >
            File Uploader
          </Title>
          <FileUploader />
        </Card>
      </Stack>
    </MantineProvider>
  );
}

export default App;
