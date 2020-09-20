import React from "react";
import { render } from "@testing-library/react";
import WelcomePage from "../WelcomePage";

test("WelcomePage", () => {
  const { baseElement } = render(<WelcomePage />);
  expect(baseElement).toBeInTheDocument();
});
