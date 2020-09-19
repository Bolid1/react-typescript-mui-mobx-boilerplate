import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import logo from "logo.svg";

const useStyles = makeStyles((theme) => ({
  "@keyframes spin": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
  root: {
    margin: theme.spacing(2, 0),
    height: 100,
    pointerEvents: "none",
    animation: "$spin infinite 20s linear",
  },
}));

export default function Logo() {
  const classes = useStyles();

  return <img src={logo} className={classes.root} alt="logo" />;
}
