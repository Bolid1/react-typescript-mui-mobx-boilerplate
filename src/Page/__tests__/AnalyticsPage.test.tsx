import React from "react";
import { render } from "@testing-library/react";
import AnalyticsPage from "../AnalyticsPage";

test("AnalyticsPage", () => {
  const { baseElement } = render(<AnalyticsPage />);
  expect(baseElement).toBeInTheDocument();
});
