import { Posts } from "../posts";
import { render, screen } from "@testing-library/react";
import { createPostPreview } from "./post-preview.test";

describe("Posts", () => {
  it("should render the posts", () => {
    const data = [...Array(10)].map((_, i) =>
      createPostPreview({
        title: `Post ${i + 1}`,
        intro: `Post Intro ${i + 1}`,
        id: i + 1,
      })
    );
    render(<Posts data={data} />);

    data.forEach((post) => {
      expect(screen.getByText(post.title)).toBeInTheDocument();
      expect(screen.getByText(post.intro)).toBeInTheDocument();
    });
  });
});
