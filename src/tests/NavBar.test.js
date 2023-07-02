import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

describe("NavBar", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders 'View Properties'", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const viewPropertiesLink = screen.getByText("View Properties");

    expect(viewPropertiesLink).toBeInTheDocument();
  });

  it("renders 'Add a Property'", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const addPropertyLink = screen.getByText("Add a Property");

    expect(addPropertyLink).toBeInTheDocument();
  });

  it("renders two links", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(2);
  });
});
