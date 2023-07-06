import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CityFilter from "../../components/FilterSortSearch";

describe("Filter, Sort, Search", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <CityFilter />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders 6 links", () => {
    render(
      <MemoryRouter>
        <CityFilter />
      </MemoryRouter>
    );

    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(6);
  });
});
