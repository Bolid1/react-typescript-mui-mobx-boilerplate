import React, { PropsWithChildren, createContext, useContext } from "react";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider } from "@material-ui/core/styles";
import createStore from "Store";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const store = createStore();
const StoreContext = createContext(store);
export const useStore = () => useContext(StoreContext);

export default function Provider({ children }: PropsWithChildren<any>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
