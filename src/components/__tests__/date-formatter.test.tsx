import { DateFormatter } from "../date-formatter";
import { render, screen } from "@testing-library/react";

describe("DateFormatter", () => {
  it("should format a date at the end of the day", () => {
    render(<DateFormatter date="2021-11-15T23:59:59.0000-03:00" />);
    expect(screen.getByText("Nov 15")).toBeInTheDocument();
  });

  it("should format a date at the beginning of the day", () => {
    render(<DateFormatter date="2021-11-15T00:00:00.0000-03:00" />);
    expect(screen.getByText("Nov 15")).toBeInTheDocument();
  });
});
