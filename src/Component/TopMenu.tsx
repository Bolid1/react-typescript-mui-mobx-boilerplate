import { Hidden } from "@material-ui/core";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";

export default function TopMenu({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => any;
}) {
  return (
    <Hidden mdUp={true}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(!open)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Hidden>
  );
}
