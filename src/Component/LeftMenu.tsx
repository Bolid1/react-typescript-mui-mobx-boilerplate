import React, {
  Fragment,
  lazy,
  PropsWithChildren,
  Suspense,
  useEffect,
} from "react";
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
import routes from "config/routes";
import useStore from "Store";
import Loader from "Component/Loader";

const PieChartIcon = lazy(() => import("@material-ui/icons/PieChart"));

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

function ListItemLinkFallback({ title }: { title: string }) {
  return (
    <ListItem>
      <ListItemIcon>
        <Loader />
      </ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  );
}

function ContentItem({
  title,
  path,
  children,
}: PropsWithChildren<{ title: string; path: string }>) {
  return (
    <Suspense key={title} fallback={<ListItemLinkFallback title={title} />}>
      <ListItemLink to={path}>
        <ListItemIcon>{children}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItemLink>
    </Suspense>
  );
}

function Content() {
  return (
    <Fragment>
      <List>
        <ContentItem title="SmartChoice" path="/">
          <PieChartIcon />
        </ContentItem>
      </List>
      <Divider />
      <List>
        {routes
          .filter(({ leftMenu }) => leftMenu)
          .map(({ Icon, ...route }) => (
            <ContentItem title={route.title} path={route.path}>
              <Icon />
            </ContentItem>
          ))}
      </List>
    </Fragment>
  );
}

function LeftMenuDesktop() {
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

const LeftMenuMobile = observer(() => {
  const classes = useStyles();
  const { open, setOpen } = useStore().leftMenu;

  return (
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
  );
});

export default function LeftMenu() {
  return (
    <Fragment>
      <Hidden smDown={true}>
        <LeftMenuDesktop />
      </Hidden>

      <Hidden mdUp={true}>
        <LeftMenuMobile />
      </Hidden>
    </Fragment>
  );
}
