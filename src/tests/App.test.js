import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../components/App";

describe("App", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders 'Surreal Estate'", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const appHeader = screen.getByText("Surreal Estate");

    expect(appHeader).toBeInTheDocument();
  });

  it("renders logo", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const logo = screen.getByAltText("Logo");

    expect(logo).toBeInTheDocument();
  });
});
