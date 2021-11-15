import { Avatar } from "../avatar";
import { render, screen } from "@testing-library/react";
import { Author, createAuthor } from "../../models";

describe("Avatar", () => {
  let author: Author;
  beforeEach(() => {
    author = createAuthor("John Doe", "https://avatars0.any");
  });

  it("should render", () => {
    render(<Avatar author={author} />);
  });

  it("should render a image", () => {
    render(<Avatar author={author} />);
    expect(screen.getByRole("img")).toHaveAttribute("alt", "John Doe");
  });

  it("should render a name", () => {
    render(<Avatar author={author} />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });
});
