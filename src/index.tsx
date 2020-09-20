import React, { Suspense, lazy } from "react";
import Loader from "Component/Loader";
import * as serviceWorker from "serviceWorker";

const Baseline = lazy(() => import("Component/CssBaseline"));
const Provider = lazy(() => import("Provider"));
const App = lazy(() => import("App"));

const AppLoader = () => (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Loader />
  </div>
);

const root = document.getElementById("root");
const loader = document.querySelector(".js-loader");

if (loader) {
  loader.classList.add("ready");
}

import("react-dom").then((ReactDOM) =>
  ReactDOM.render(
    <Suspense fallback={<AppLoader />}>
      <Provider>
        <Suspense fallback={""}>
          <Baseline />
        </Suspense>
        <Suspense fallback={<AppLoader />}>
          <App />
        </Suspense>
      </Provider>
    </Suspense>,
    root
  )
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
