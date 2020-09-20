import React from "react";
import { render } from "@testing-library/react";
import TopMenu from "../TopMenu";

test("TopMenu", () => {
  const { baseElement } = render(<TopMenu />);
  expect(baseElement).toBeInTheDocument();
});
