import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PropertyCard from "../../components/PropertyCard";

describe("PropertyCard", () => {
  const validProps = {
    title: "test title",
    type: "test type",
    bedrooms: 2,
    bathrooms: 1,
    price: 150000,
    city: "test city",
    email: "test email",
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <PropertyCard
          title={validProps.title}
          type={validProps.type}
          bedrooms={validProps.bedrooms}
          bathrooms={validProps.bathrooms}
          price={validProps.price}
          city={validProps.city}
        />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders title", () => {
    render(
      <MemoryRouter>
        <PropertyCard title={validProps.title} />
      </MemoryRouter>
    );

    const title = screen.getByText("test title");

    expect(title).toBeInTheDocument();
  });

  it("renders type", () => {
    render(
      <MemoryRouter>
        <PropertyCard type={validProps.type} />
      </MemoryRouter>
    );

    const type = screen.getByText("test type");

    expect(type).toBeInTheDocument();
  });

  it("renders bedrooms", () => {
    render(
      <MemoryRouter>
        <PropertyCard bedrooms={validProps.bedrooms} />
      </MemoryRouter>
    );

    const bedrooms = screen.getByText("2");

    expect(bedrooms).toBeInTheDocument();
  });

  it("renders bathrooms", () => {
    render(
      <MemoryRouter>
        <PropertyCard bathrooms={validProps.bathrooms} />
      </MemoryRouter>
    );

    const bathrooms = screen.getByText("1");

    expect(bathrooms).toBeInTheDocument();
  });

  it("renders price", () => {
    render(
      <MemoryRouter>
        <PropertyCard price={validProps.price} />
      </MemoryRouter>
    );

    const price = screen.getByText("150000");

    expect(price).toBeInTheDocument();
  });

  it("renders city", () => {
    render(
      <MemoryRouter>
        <PropertyCard city={validProps.city} />
      </MemoryRouter>
    );

    const city = screen.getByText("test city");

    expect(city).toBeInTheDocument();
  });

  it("renders email", () => {
    render(
      <MemoryRouter>
        <PropertyCard />
      </MemoryRouter>
    );

    const email = screen.getByText("Email");

    expect(email).toBeInTheDocument();
  });

  it("emails correct email address", () => {
    render(
      <MemoryRouter>
        <PropertyCard email={validProps.email} />
      </MemoryRouter>
    );

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", "mailto:test email");
  });
});
