import React from "react";
import { render } from "@testing-library/react";
import Provider from "Provider";

test("Provider", () => {
  const { baseElement } = render(<Provider>test</Provider>);
  expect(baseElement).toBeInTheDocument();
});
