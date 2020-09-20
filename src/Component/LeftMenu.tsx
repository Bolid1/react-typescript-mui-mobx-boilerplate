import React, { Fragment, Suspense, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import makeStyles from "@material-ui/core/styles/makeStyles";
import PieChartIcon from "@material-ui/icons/PieChart";
import { useStore } from "Provider";
import routes from "config/routes";

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

function ListItemLink(props: ListItemProps<Link, { button?: true }>) {
  return <ListItem button component={Link} {...props} />;
}

function Content() {
  return (
    <Fragment>
      <List>
        <ListItemLink button to="/">
          <ListItemIcon>
            <PieChartIcon />
          </ListItemIcon>
          <ListItemText primary="SmartChoice" />
        </ListItemLink>
      </List>
      <Divider />
      <List>
        {routes
          .filter(({ leftMenu }) => leftMenu)
          .map(({ Icon, ...route }) => (
            <Suspense key={route.title} fallback={<div>loading...</div>}>
              <ListItemLink button to={route.path}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={route.title} />
              </ListItemLink>
            </Suspense>
          ))}
      </List>
    </Fragment>
  );
}

function LeftMenuDesktopDrawer() {
  const { setOpen } = useStore().leftMenu;
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

export function LeftMenuDesktop() {
  return (
    <Hidden smDown={true}>
      <LeftMenuDesktopDrawer />
    </Hidden>
  );
}

export const LeftMenuMobile = observer(() => {
  const classes = useStyles();
  const { open, setOpen } = useStore().leftMenu;

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
});
