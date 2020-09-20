import React from "react";
import { render } from "@testing-library/react";
import BillsPage from "../BillsPage";

test("BillsPage", () => {
  const { baseElement } = render(<BillsPage />);
  expect(baseElement).toBeInTheDocument();
});
