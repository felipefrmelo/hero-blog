import { Avatar } from "../avatar";
import { render, screen } from "@testing-library/react";

describe("Avatar", () => {
  let author: string;
  beforeEach(() => {
    author = "John Doe";
  });

  it("should render a avatar", () => {
    render(<Avatar author={author} />);
    expect(screen.getByText("J")).toBeInTheDocument();
  });

  it("should render a name", () => {
    render(<Avatar author={author} />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });
});
