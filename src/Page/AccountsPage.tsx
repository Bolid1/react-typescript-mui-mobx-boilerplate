import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({}));

export default function AccountsPage() {
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h1" align="center">
        Accounts
      </Typography>
    </Container>
  );
}
