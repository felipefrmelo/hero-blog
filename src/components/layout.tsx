import { Layout as LayoutAntd, Tag } from "antd";

const { Header, Footer, Sider, Content } = LayoutAntd;

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutAntd
      style={{
        maxWidth: "1504px",
        margin: "0 auto",
        background: "#fff",
      }}
    >
      <LayoutAntd>
        <Header
          style={{
            background: "#fff",
          }}
        >
          <div>
            <Tag color="magenta">magenta</Tag>
            <Tag color="red">red</Tag>
            <Tag color="volcano">volcano</Tag>
            <Tag color="orange">orange</Tag>
            <Tag color="gold">gold</Tag>
            <Tag color="lime">lime</Tag>
            <Tag color="green">green</Tag>
            <Tag color="cyan">cyan</Tag>
            <Tag color="blue">blue</Tag>
            <Tag color="geekblue">geekblue</Tag>
            <Tag color="purple">purple</Tag>
          </div>
        </Header>
        <Content
          style={{
            background: "#fff",
          }}
        >
          {children}
        </Content>
      </LayoutAntd>
    </LayoutAntd>
  );
};
