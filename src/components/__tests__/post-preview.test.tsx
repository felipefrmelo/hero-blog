import { PostPreview, PostPreviewProps } from "../post-preview";
import { render, screen } from "@testing-library/react";

export function createPostPreview({
  title = "Post Title",
  intro = "Post Intro",
  id = 1,
}: Partial<PostPreviewProps> = {}): PostPreviewProps {
  return {
    title,
    intro,
    id,
    date: "2020-01-01T00:00:00.0000-03:00",
    feedImage: {
      url: "https://image.com/image.jpg",
      alt: "Image alt",
    },
    author: "author-name",
    tags: ["tag1", "tag2"],
  };
}

describe("PostPreview", () => {
  let post: PostPreviewProps;
  beforeEach(() => {
    post = createPostPreview();
  });

  it("should render the post title", () => {
    render(<PostPreview {...post} />);
    expect(screen.getByText("Post Title")).toBeInTheDocument();
  });

  it("should render the post intro", () => {
    render(<PostPreview {...post} />);
    expect(screen.getByText("Post Intro")).toBeInTheDocument();
  });

  it("should render the post date", () => {
    render(<PostPreview {...post} />);
    expect(screen.getByText("Jan 1")).toBeInTheDocument();
  });

  it("should render the avatar with the post author", () => {
    render(<PostPreview {...post} />);
    expect(screen.getByText("author-name")).toBeInTheDocument();
  });

  it("should render the tags", () => {
    render(<PostPreview {...post} />);
    expect(screen.getByText("tag1")).toBeInTheDocument();
    expect(screen.getByText("tag2")).toBeInTheDocument();
  });

  it("should have a link to the post", () => {
    render(<PostPreview {...post} />);
    expect(screen.getByRole("link")).toHaveAttribute("href", "/posts/1");
  });

  it("should render the feed image", () => {
    render(<PostPreview {...post} />);
    expect(screen.getByRole("img")).toHaveAttribute("alt", "Image alt");
  });
});
