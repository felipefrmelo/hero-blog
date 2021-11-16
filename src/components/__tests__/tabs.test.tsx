import { Tabs } from "../tabs";
import { render, fireEvent, screen } from "@testing-library/react";

const createContents = (n: number) =>
  [...Array(n)].map((_, i) => ({
    label: `Tab ${i + 1}`,
    content: `Content ${i + 1}`,
  }));

describe("Tabs", () => {
  it("should render the tabs", () => {
    const content = createContents(2);
    render(<Tabs content={content} />);

    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
  });

  it("should render the first tab by default", () => {
    const contents = createContents(2);
    render(<Tabs content={contents} />);
    expect(screen.getByText(contents[0].content)).toBeInTheDocument();
  });

  it("should render the second tab when clicked", () => {
    const contents = createContents(2);
    render(<Tabs content={contents} />);

    fireEvent.click(screen.getByRole("tab", { name: "Tab 2" }));

    expect(screen.getByText(contents[1].content)).toBeInTheDocument();
  });
});
