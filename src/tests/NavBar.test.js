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

    const viewProperties = screen.getByText("View Properties");

    expect(viewProperties).toBeInTheDocument();
  });

  it("renders 'Add a Property'", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const addProperty = screen.getByText("Add a Property");

    expect(addProperty).toBeInTheDocument();
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
