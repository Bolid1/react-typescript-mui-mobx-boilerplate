import { createStyles } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import clsx from "clsx";
import React, { Fragment, PropsWithChildren, Suspense } from "react";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import routes from "config/routes";
import Loader from "Component/Loader";
import { useUIStore } from "Store";
import { observer } from "mobx-react-lite";

function ListItemLink(props: ListItemProps<Link, { button?: true }>) {
  return <ListItem button component={Link} {...props} />;
}

interface ContentItemProps extends PropsWithChildren<any> {
  title: string;
  path: string;
  hideText?: boolean;
}

const useContentItemStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1, 3),
    },
    icon: {
      width: 24,
      minWidth: "auto",
    },
    text: {
      width: 167,
    },
    textOpen: {
      width: 167,
      marginLeft: theme.spacing(3),
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    textHidden: {
      overflowX: "hidden",
      width: 0,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  })
);

function ContentItem({ title, path, children, hideText }: ContentItemProps) {
  const classes = useContentItemStyles({ hideText });

  return (
    <ListItemLink className={classes.root} to={path}>
      <ListItemIcon className={classes.icon}>
        <Suspense key={title} fallback={<Loader />}>
          {children}
        </Suspense>
      </ListItemIcon>
      <ListItemText
        className={clsx(classes.text, {
          [classes.textOpen]: !hideText,
          [classes.textHidden]: hideText,
        })}
        primary={title}
      />
    </ListItemLink>
  );
}

interface ContentProps {
  hideText?: boolean;
}

function Content({ hideText }: ContentProps) {
  return (
    <Fragment>
      <List>
        {routes
          .filter(({ leftMenu }) => leftMenu === 0)
          .map(({ Icon, ...route }) => (
            <ContentItem
              key={route.title}
              title={route.title}
              path={route.path}
              hideText={hideText}
            >
              <Icon />
            </ContentItem>
          ))}
      </List>
      <Divider />
      <List>
        {routes
          .filter(({ leftMenu }) => leftMenu === 1)
          .map(({ Icon, ...route }) => (
            <ContentItem
              key={route.title}
              title={route.title}
              path={route.path}
              hideText={hideText}
            >
              <Icon />
            </ContentItem>
          ))}
      </List>
    </Fragment>
  );
}

const drawerWidth = 256;

const useStyles = makeStyles((theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      whiteSpace: "nowrap",
    },
    drawerMid: {
      width: 73,
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    paper: {
      top: "auto",
    },
    paperOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    paperClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  })
);

export default observer(function LeftMenu() {
  const classes = useStyles();
  const { leftMenu } = useUIStore();

  return (
    <Fragment>
      {/*innerWidth  |xs      sm       md       lg       xl        */}
      {/*            |--------|--------|--------|--------|-------->*/}
      {/*width       |   xs   |   sm   |   md   |   lg   |   xl    */}
      {/*            |--------|--------|--------|--------|-------->*/}
      {/*smUp        |  show  |  hide  |        |        |         */}
      {/*mdUp        |        |  show  |  hide  |        |         */}
      {/*lgUp        |        |        |  show  |  hide  |         */}
      {/*xlUp        |        |        |        |  show  |  hide   */}
      {/*            |--------|--------|--------|--------|-------->*/}
      {/*lgDown      |        |        |        |  hide  |  show   */}
      {/*mdDown      |        |        |  hide  |  show  |         */}
      {/*smDown      |        |  hide  |  show  |        |         */}
      {/*xsDown      |  hide  |  show  |        |        |         */}
      <Hidden smDown>
        <Drawer
          variant="permanent"
          className={classes.drawer}
          classes={{
            paper: clsx(classes.paper, classes.paperOpen),
          }}
        >
          <Content />
        </Drawer>
      </Hidden>
      <Hidden xsDown mdUp>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, classes.drawerMid)}
          classes={{
            paper: clsx(classes.paper, {
              [classes.paperOpen]: leftMenu.isOpened,
              [classes.paperClose]: !leftMenu.isOpened,
            }),
          }}
        >
          <Content hideText={!leftMenu.isOpened} />
        </Drawer>
      </Hidden>
      <Hidden smUp>
        <Drawer
          variant="temporary"
          open={leftMenu.isOpened}
          onClose={leftMenu.close}
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: leftMenu.isOpened,
            [classes.drawerClose]: !leftMenu.isOpened,
          })}
          classes={{
            paper: clsx(classes.paper, {
              [classes.paperOpen]: leftMenu.isOpened,
              [classes.paperClose]: !leftMenu.isOpened,
            }),
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <Content />
        </Drawer>
      </Hidden>
    </Fragment>
  );
});
