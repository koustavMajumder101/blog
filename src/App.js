import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";
// import Blog from "./pages/Blog";
import Routes from "./Routes";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
