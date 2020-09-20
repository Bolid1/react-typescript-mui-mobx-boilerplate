import React from "react";
import { render } from "@testing-library/react";
import DashboardPage from "../DashboardPage";

test("DashboardPage", () => {
  const { baseElement } = render(<DashboardPage />);
  expect(baseElement).toBeInTheDocument();
});
