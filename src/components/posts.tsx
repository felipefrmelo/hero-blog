import { Divider, List } from "antd";
import { PostPreview, PostPreviewProps } from "./post-preview";

interface PostsProps {
  data: PostPreviewProps[];
}

export const Posts = ({ data }: PostsProps) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={data}
      renderItem={(post) => (
        <List.Item key={post.id}>
          <PostPreview {...post} />
        </List.Item>
      )}
    />
  );
};
