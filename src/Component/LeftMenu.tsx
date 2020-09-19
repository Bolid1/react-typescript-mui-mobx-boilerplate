import React, { Fragment, useEffect } from "react";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AccountsIcon from "@material-ui/icons/AccountBalanceWallet";
import AnalyticsIcon from "@material-ui/icons/Assessment";
import BillsIcon from "@material-ui/icons/Receipt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SettingsIcon from "@material-ui/icons/Settings";
import PieChartIcon from "@material-ui/icons/PieChart";

const drawerWidth = 240;

const useStyles = makeStyles(() => ({
  root: {
    width: drawerWidth,
    minHeight: "100vh",
    flexShrink: 0,
  },
  paper: {
    width: drawerWidth,
  },
}));

function Content() {
  return (
    <Fragment>
      <Toolbar style={{ flexShrink: 0, justifyContent: "center" }}>
        <PieChartIcon fontSize="large" />
      </Toolbar>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccountsIcon />
          </ListItemIcon>
          <ListItemText primary="Accounts" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BillsIcon />
          </ListItemIcon>
          <ListItemText primary="Bills" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AnalyticsIcon />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Fragment>
  );
}

function LeftMenuDesktopDrawer({
  setOpen,
}: {
  setOpen: (open: boolean) => any;
}) {
  const classes = useStyles();

  useEffect(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      className={classes.root}
      classes={{ paper: classes.paper }}
    >
      <Content />
    </Drawer>
  );
}

export function LeftMenuDesktop({
  setOpen,
}: {
  setOpen: (open: boolean) => any;
}) {
  return (
    <Hidden smDown={true}>
      <LeftMenuDesktopDrawer setOpen={setOpen} />
    </Hidden>
  );
}

export function LeftMenuMobile({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => any;
}) {
  const classes = useStyles();

  return (
    <Hidden mdUp={true}>
      <Drawer
        variant="temporary"
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        className={classes.root}
        classes={{ paper: classes.paper }}
      >
        <Content />
      </Drawer>
    </Hidden>
  );
}
