import React from "react";
import { render } from "@testing-library/react";
import AccountsPage from "../AccountsPage";

test("AccountsPage", () => {
  const { baseElement } = render(<AccountsPage />);
  expect(baseElement).toBeInTheDocument();
});
