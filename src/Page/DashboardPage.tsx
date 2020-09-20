import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({}));

export default function DashboardPage() {
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h1" align="center">
        Dashboard
      </Typography>
    </Container>
  );
}
