import AppRouter from "./router/AppRouter";
import theme from "./component/globalStyles/theme";
import {ThemeProvider} from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>

      <AppRouter/>

    </ThemeProvider>
    
  );
}

export default App;
