import React, { PropsWithChildren } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Main({ children }: PropsWithChildren<any>) {
  const classes = useStyles();

  return <main className={classes.root}>{children}</main>;
}
