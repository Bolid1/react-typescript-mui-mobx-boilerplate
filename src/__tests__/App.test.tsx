import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import App from "App";

test("App", () => {
  const { baseElement } = render(
    <Router>
      <App />
    </Router>
  );
  expect(baseElement).toBeInTheDocument();
});
