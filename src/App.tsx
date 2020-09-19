import WelcomePage from "Page/WelcomePage";
import React, { Fragment, useState } from "react";
import Box from "@material-ui/core/Box";
import { LeftMenuDesktop, LeftMenuMobile } from "Component/LeftMenu";
import Main from "Component/Main";
import TopMenu from "Component/TopMenu";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <Box display="flex" minHeight="100vh">
        <TopMenu open={open} setOpen={setOpen} />
        <LeftMenuDesktop setOpen={setOpen} />
        <LeftMenuMobile open={open} setOpen={setOpen} />
        <Main>
          <WelcomePage />
        </Main>
      </Box>
    </Fragment>
  );
}

export default App;
