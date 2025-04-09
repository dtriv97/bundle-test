import "./App.css";
import { Card, FileInput, Stack, Title, MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider>
      <Stack>
        <Card>
          <Title order={1}>File Uploader</Title>
        </Card>
        <Card>
          <FileInput />
        </Card>
      </Stack>
    </MantineProvider>
  );
}

export default App;
