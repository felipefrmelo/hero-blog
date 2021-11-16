import { PostPreviewProps, Posts } from "../components";
import { getPosts } from "../services/api";

interface Props {
  data: PostPreviewProps[];
}

const Home = ({ data }: Props) => {
  return (
    <div>
      <Posts data={data} />
    </div>
  );
};

export async function getStaticProps() {
  const data = await getPosts();

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
}

export default Home;
