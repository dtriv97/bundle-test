import "./App.css";
import { Card, Stack, Title, MantineProvider } from "@mantine/core";
import FileUploader from "./components/FileUploader";

function App() {
  return (
    <MantineProvider>
      <Stack
        h="100vh"
        justify="center"
        align="center"
        style={{ padding: "20px" }}
      >
        <Card
          style={{
            backgroundColor: "#f0f0f0",
            padding: "20px",
            borderRadius: "10px",
            width: "100%",
            maxWidth: "800px",
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
