import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AddProperty from "../../components/AddProperty";

describe("Add Property", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <AddProperty />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders 'Tell us about your new property:'", () => {
    render(
      <MemoryRouter>
        <AddProperty />
      </MemoryRouter>
    );

    const header = screen.getByText("Tell us about your new property:");

    expect(header).toBeInTheDocument();
  });

  it("renders 'Property Title:'", () => {
    render(
      <MemoryRouter>
        <AddProperty />
      </MemoryRouter>
    );

    const propertyTitleLabel = screen.getByLabelText("Property Title:");

    expect(propertyTitleLabel).toBeInTheDocument();
  });

  it("renders 'Property Type:'", () => {
    render(
      <MemoryRouter>
        <AddProperty />
      </MemoryRouter>
    );

    const propertyTypeLabel = screen.getByLabelText("Property Type:");

    expect(propertyTypeLabel).toBeInTheDocument();
  });

  it("renders 'Number of bedrooms:'", () => {
    render(
      <MemoryRouter>
        <AddProperty />
      </MemoryRouter>
    );

    const numberOfBedroomsLabel = screen.getByLabelText("Number of bedrooms:");

    expect(numberOfBedroomsLabel).toBeInTheDocument();
  });

  it("renders 'Number of bathrooms:'", () => {
    render(
      <MemoryRouter>
        <AddProperty />
      </MemoryRouter>
    );

    const numberOfBathroomsLabel = screen.getByLabelText(
      "Number of bathrooms:"
    );

    expect(numberOfBathroomsLabel).toBeInTheDocument();
  });

  it("renders 'City:'", () => {
    render(
      <MemoryRouter>
        <AddProperty />
      </MemoryRouter>
    );

    const cityLabel = screen.getByLabelText("City:");

    expect(cityLabel).toBeInTheDocument();
  });

  it("renders 'Email:'", () => {
    render(
      <MemoryRouter>
        <AddProperty />
      </MemoryRouter>
    );

    const emailLabel = screen.getByLabelText("Email:");

    expect(emailLabel).toBeInTheDocument();
  });

  it("has a button", () => {
    render(
      <MemoryRouter>
        <AddProperty />
      </MemoryRouter>
    );

    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(1);
  });

  it("button has the text 'Add'", () => {
    render(
      <MemoryRouter>
        <AddProperty />
      </MemoryRouter>
    );

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("Add");
  });
});
