import React, { PropsWithChildren, Suspense } from "react";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const Loader = () => (
  <Box display="flex" justifyContent="center" alignItems="center" height="100%">
    <CircularProgress />
  </Box>
);

export default function Main({ children }: PropsWithChildren<any>) {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </main>
  );
}
