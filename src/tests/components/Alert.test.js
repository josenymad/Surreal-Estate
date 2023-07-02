import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Alert from "../../components/Alert";

describe("Alert", () => {
  it("displays an error message", () => {
    render(
      <MemoryRouter>
        <Alert message="Error!" />
      </MemoryRouter>
    );

    const alertMessageNode = screen.getByText(/Error/);

    expect(alertMessageNode.textContent).toBe("Error!");
  });

  it("displays a success message", () => {
    render(
      <MemoryRouter>
        <Alert message="Success!" success />
      </MemoryRouter>
    );

    const alertMessageNode = screen.getByText(/Success/);

    expect(alertMessageNode.textContent).toBe("Success!");
  });

  it("does not render if there is no message", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Alert message="" />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
