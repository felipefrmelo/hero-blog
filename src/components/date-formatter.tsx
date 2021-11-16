import { Typography } from "antd";

interface DateFormatterProps {
  date: string;
}

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const DateFormatter = ({ date }: DateFormatterProps) => {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = months[dateObj.getMonth()];

  return <Typography.Text type="secondary">{`${month} ${day}`}</Typography.Text>;
};
