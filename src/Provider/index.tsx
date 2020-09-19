import React, { PropsWithChildren, createContext, useContext } from "react";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import createStore from "Store";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: green,
  },
});

const store = createStore();
const StoreContext = createContext(store);
export const useStore = () => useContext(StoreContext);

export default function Provider({ children }: PropsWithChildren<any>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
