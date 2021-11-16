import { Avatar as AvatarAntd, Button, Col, Row } from "antd";
import { Typography } from "antd";
const { Text } = Typography;

interface AvatarProps {
  author: string;
}

export const Avatar = ({ author }: AvatarProps) => {
  return (
    <Row gutter={8} justify="start" align="middle">
      <Col>
        <AvatarAntd size="default" gap={0} alt={author}>
          {author.charAt(0).toUpperCase()}
        </AvatarAntd>
      </Col>
      <Col>
        <Text>{author}</Text>
      </Col>
    </Row>
  );
};
