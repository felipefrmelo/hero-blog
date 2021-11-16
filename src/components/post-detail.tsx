import Link from "next/link";
import { FeedImage } from "../models";
import { DateFormatter } from "./date-formatter";
import { Avatar } from "./avatar";
import { Col, Row, Tag, Typography, Space, Divider } from "antd";
import { Image } from ".";

type Type = "paragraph" | "image" | "heading";

interface Body {
  value: any;
  id: string;
  type: Type;
}

function handleParagraph({ value }: Body) {
  return <div dangerouslySetInnerHTML={{ __html: value }} />;
}

function handleHeading({ value }: Body) {
  return (
    <Typography.Title style={{ textAlign: "center" }} level={2}>
      {value}
    </Typography.Title>
  );
}

function handleImage({ value }: Body) {
  return (
    <div style={{ margin: "0 auto" }}>
      <Image src={value.url} alt={value.alt} width={400} height={300} />;
    </div>
  );
}

const Handlers: Record<Type, (body: Body) => JSX.Element> = {
  paragraph: handleParagraph,
  heading: handleHeading,
  image: handleImage,
};

export interface PostDetailProps {
  id: number;
  title: string;
  feedImage?: FeedImage;
  author: string;
  intro: string;
  date: string;
  tags?: string[];
  body: Body[];
}

export const PostDetail = ({
  id,
  title,
  author,
  intro,
  tags,
  date,
  body,
}: PostDetailProps) => {
  return (
    <Col style={{ padding: "2rem" }}>
      <Row gutter={8} align="middle">
        <Col>
          <Avatar author={author} />
        </Col>
        <Col>
          <DateFormatter date={date} />
        </Col>
      </Row>
      <Divider />
      <Row>
        <Typography.Title level={1}>{title}</Typography.Title>
      </Row>
      <Row>
        <Typography.Paragraph>{intro}</Typography.Paragraph>
      </Row>
      <Row>
        {tags?.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Row>
      <Divider />
      <Col style={{ maxWidth: "1500px" }}>
        {body.map((body) => (
          <Row key={body.id}>
            {Handlers[body.type](body)}
            <Divider />
          </Row>
        ))}
      </Col>
    </Col>
  );
};
