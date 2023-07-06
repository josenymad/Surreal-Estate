import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CityFilter from "../../components/CityFilter";

describe("City Filter", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <CityFilter />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders 4 city links", () => {
    render(
      <MemoryRouter>
        <CityFilter />
      </MemoryRouter>
    );

    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(4);
  });
});
