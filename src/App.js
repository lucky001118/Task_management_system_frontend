import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./therme/darktheme";
import NavbarMain from "./Page/Navbar/NavbarMain";
import Homepage from "./Page/HomePage/Homepage";




function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <NavbarMain />
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
