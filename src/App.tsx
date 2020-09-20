import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import { LeftMenuDesktop, LeftMenuMobile } from "Component/LeftMenu";
import Main from "Component/Main";
import TopMenu from "Component/TopMenu";
import routes from "config/routes";

const WelcomePage = lazy(() => import("Page/WelcomePage"));

const Loader = () => (
  <Box display="flex" justifyContent="center" alignItems="center" height="100%">
    <CircularProgress />
  </Box>
);

function App() {
  return (
    <Router>
      <Box display="flex" minHeight="100vh">
        <TopMenu />
        <LeftMenuDesktop />
        <LeftMenuMobile />
        <Main>
          <Switch>
            <Route exact path="/">
              <Suspense fallback={<Loader />}>
                <WelcomePage />
              </Suspense>
            </Route>
            {routes.map(({ Page, ...route }) => (
              <Route path={route.path}>
                <Suspense key={route.path} fallback={<Loader />}>
                  <Page />
                </Suspense>
              </Route>
            ))}
          </Switch>
        </Main>
      </Box>
    </Router>
  );
}

export default App;
