import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "../../components/App";

describe("App", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <GoogleOAuthProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </GoogleOAuthProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders 'Surreal Estate'", () => {
    render(
      <GoogleOAuthProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </GoogleOAuthProvider>
    );

    const appHeader = screen.getByText("Surreal Estate");

    expect(appHeader).toBeInTheDocument();
  });

  it("renders logo", () => {
    render(
      <GoogleOAuthProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </GoogleOAuthProvider>
    );

    const logo = screen.getByAltText("Logo");

    expect(logo).toBeInTheDocument();
  });
});
