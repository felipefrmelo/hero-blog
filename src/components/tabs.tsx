import { Tabs as TabsAntd } from "antd";

const { TabPane } = TabsAntd;

type Content = {
  label: string;
  content: React.ReactNode | string;
};

interface TabsProps {
  content: Content[];
}

export const Tabs = ({ content }: TabsProps) => (
  <TabsAntd>
    {content.map(({ content, label }) => (
      <TabPane tab={label} key={label}>
        {content}
      </TabPane>
    ))}
  </TabsAntd>
);
