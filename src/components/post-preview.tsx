import Link from "next/link";
import { FeedImage } from "../models";
import { DateFormatter } from "./date-formatter";
import { Avatar } from "./avatar";
import { Col, Row, Tag, Typography, Space } from "antd";
import { Image } from ".";

export interface PostPreviewProps {
  id: number;
  title: string;
  feedImage?: FeedImage;
  author: string;
  intro: string;
  date: string;
  tags?: string[];
}

export const PostPreview = ({
  id,
  title,
  feedImage,
  author,
  intro,
  tags,
  date,
}: PostPreviewProps) => {
  return (
    <Row justify="space-between" align="middle">
      <Col xs={24} md={16}>
        <Space size="middle" direction="vertical">
          <Row gutter={8} align="middle">
            <Col>
              <Avatar author={author} />
            </Col>
            <Col>
              <DateFormatter date={date} />
            </Col>
          </Row>
          <Typography.Title level={3}>
            <Link as={`/posts/${id}`} href="/posts/[id]">
              {title}
            </Link>
          </Typography.Title>
          <Typography.Paragraph>{intro}</Typography.Paragraph>
          <Row>
            {tags?.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Row>
        </Space>
      </Col>
      <Col xs={24} md={4}>
        {feedImage && (
          <Image
            src={feedImage.url}
            width={400}
            height={300}
            alt={feedImage.alt}
          />
        )}
      </Col>
    </Row>
  );
};
