import React from "react";
import { render } from "@testing-library/react";
import Main from "../Main";

test("Main", () => {
  const { baseElement } = render(<Main />);
  expect(baseElement).toBeInTheDocument();
});
