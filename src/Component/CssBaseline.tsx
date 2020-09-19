import React, { Fragment, PropsWithChildren } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import "fontsource-roboto/300.css";
import "fontsource-roboto/400.css";
import "fontsource-roboto/500.css";
import "fontsource-roboto/700.css";

export default function Baseline({ children }: PropsWithChildren<any>) {
  return (
    <Fragment>
      <CssBaseline />
      {children}
    </Fragment>
  );
}
