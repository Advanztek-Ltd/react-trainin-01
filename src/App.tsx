import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { theme } from "../src/Styles/Themes";
import PublicRoutes from "./Routes/public";
import FrontLayout from "./Components/Layout/Front";
import { useState } from "react";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  theme.palette = {
    mode: isDarkTheme ? "dark" : "light",
  };

  const appTheme = createTheme(theme);
  return (
    <BrowserRouter>
      <ThemeProvider theme={appTheme}>
        <FrontLayout changeTheme={changeTheme} isDarkTheme={isDarkTheme}>
          <PublicRoutes />
        </FrontLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
