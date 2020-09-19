import WelcomePage from "Page/WelcomePage";
import React, { Fragment } from "react";
import Box from "@material-ui/core/Box";
import { LeftMenuDesktop, LeftMenuMobile } from "Component/LeftMenu";
import Main from "Component/Main";
import TopMenu from "Component/TopMenu";

function App() {
  return (
    <Fragment>
      <Box display="flex" minHeight="100vh">
        <TopMenu />
        <LeftMenuDesktop />
        <LeftMenuMobile />
        <Main>
          <WelcomePage />
        </Main>
      </Box>
    </Fragment>
  );
}

export default App;
