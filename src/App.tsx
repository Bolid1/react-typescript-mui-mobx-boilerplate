import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Box from "@material-ui/core/Box";
import routes from "config/routes";
import Main from "Component/Main";

const WelcomePage = lazy(() => import("Page/WelcomePage"));
const LeftMenu = lazy(() => import("Component/LeftMenu"));
const TopMenu = lazy(() => import("Component/TopMenu"));

function App() {
  return (
    <Router>
      <Box display="flex" minHeight="100vh">
        <Suspense fallback={""}>
          <TopMenu />
        </Suspense>
        <Suspense fallback={""}>
          <LeftMenu />
        </Suspense>
        <Main>
          <Switch>
            <Route exact path="/">
              <WelcomePage />
            </Route>
            {routes.map(({ Page, ...route }) => (
              <Route key={route.path} path={route.path}>
                <Page />
              </Route>
            ))}
          </Switch>
        </Main>
      </Box>
    </Router>
  );
}

export default App;
