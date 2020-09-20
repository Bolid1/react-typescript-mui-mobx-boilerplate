import React from "react";
import { render } from "@testing-library/react";
import Loader from "../Loader";

test("Loader", () => {
  const { baseElement } = render(<Loader />);
  expect(baseElement).toBeInTheDocument();
});
