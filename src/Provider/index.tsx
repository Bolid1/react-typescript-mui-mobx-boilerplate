import React, { PropsWithChildren } from "react";
import green from "@material-ui/core/colors/green";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: green,
  },
});

export default function Provider({ children }: PropsWithChildren<any>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
