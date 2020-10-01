import { Hidden } from "@material-ui/core";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import { useUIStore } from "Store";

export default function TopMenu() {
  const { leftMenu } = useUIStore();

  return (
    <Hidden mdUp={true}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={leftMenu.toggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Hidden>
  );
}
