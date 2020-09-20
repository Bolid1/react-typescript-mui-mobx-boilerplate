import React from "react";
import { render } from "@testing-library/react";
import SettingsPage from "../SettingsPage";

test("SettingsPage", () => {
  const { baseElement } = render(<SettingsPage />);
  expect(baseElement).toBeInTheDocument();
});
