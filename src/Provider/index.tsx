import React, { PropsWithChildren } from "react";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

export default function Provider({ children }: PropsWithChildren<any>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
