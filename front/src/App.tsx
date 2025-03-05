import { ThemeProvider } from "@emotion/react";
import "./App.css";
import { RetreatManagementPage } from "./admin/pages/RetreatManagementPage";
import { Audience } from "./audience";
import { theme } from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Audience></Audience>
        <RetreatManagementPage />
      </ThemeProvider>
    </>
  );
}

export default App;
