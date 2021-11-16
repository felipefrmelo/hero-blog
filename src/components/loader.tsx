import { LoadingOutlined } from "@ant-design/icons";
import { Row, Spin } from "antd";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
export const Loader = () => {
  return (
    <Row align="middle" justify="center" style={{ height: "100%" }}>
      <Spin indicator={antIcon} />;
    </Row>
  );
};
