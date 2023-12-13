import {GlobalStyle} from "./styles/global.ts";
import {ThemeProvider} from "styled-components";
import {defaultTheme} from "./styles/themes/default.ts";
import {Transactions} from "./pages/Transactions/Transactions.tsx";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Transactions/>
    </ThemeProvider>
  );
}

