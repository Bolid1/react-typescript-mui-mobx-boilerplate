import React from "react";
import { render } from "@testing-library/react";
import CssBaseline from "../CssBaseline";

test("CssBaseline", () => {
  const { baseElement } = render(<CssBaseline />);
  expect(baseElement).toBeInTheDocument();
});
