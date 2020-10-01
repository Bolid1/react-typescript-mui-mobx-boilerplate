import React, { Fragment, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "Component/Loader";
import CssBaseline from "@material-ui/core/CssBaseline";
import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import LeftMenu from "Component/LeftMenu";
import routes from "config/routes";
import DefaultTopMenu from "Component/TopMenu";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
    },
  })
);

export default function App() {
  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline />
      <Switch>
        {routes
          .filter((route) => !route.hideTopMenu)
          .map(({ TopMenu, ...route }) => ({
            ...route,
            TopMenu: TopMenu || DefaultTopMenu,
          }))
          .map(({ TopMenu, ...route }) => (
            <Route key={route.path} exact={route.exact} path={route.path}>
              <Suspense fallback={<Loader />}>
                <TopMenu title={route.title} />
              </Suspense>
            </Route>
          ))}
      </Switch>
      <div style={{ display: "flex" }}>
        <Switch>
          {routes
            .filter(({ hideLeftMenu }) => !hideLeftMenu)
            .map((route) => (
              <Route key={route.path} exact={route.exact} path={route.path}>
                <Suspense fallback={<Loader height="100vh" />}>
                  <LeftMenu />
                </Suspense>
              </Route>
            ))}
        </Switch>
        <main className={classes.content}>
          <Switch>
            {routes.map(({ Page, ...route }) => (
              <Route key={route.path} exact={route.exact} path={route.path}>
                <Suspense fallback={<Loader height="100vh" />}>
                  <Page />
                </Suspense>
              </Route>
            ))}
          </Switch>
        </main>
      </div>
    </Fragment>
  );
}
