import React from "react";
import { render } from "@testing-library/react";
import LeftMenu from "../LeftMenu";

test("LeftMenu", () => {
  const { baseElement } = render(<LeftMenu />);
  expect(baseElement).toBeInTheDocument();
});
