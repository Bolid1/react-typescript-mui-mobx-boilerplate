import React from "react";
import { render } from "@testing-library/react";
import Logo from "../Logo";

test("Logo", () => {
  const { baseElement } = render(<Logo />);
  expect(baseElement).toBeInTheDocument();
});
