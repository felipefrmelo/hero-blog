import { useRouter } from "next/dist/client/router";
import { getPostById, getPosts } from "../../services/api";
import { Loader, PostDetail, PostDetailProps } from "../../components";
import { Row } from "antd";

interface Props {
  post: PostDetailProps;
}

const Post = ({ post }: Props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div>
      <PostDetail {...post} />
    </div>
  );
};

export default Post;

type Params = {
  params: {
    id: number;
  };
};

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map((post) => ({
      params: { id: `${post.id}` },
    })),

    fallback: true,
  };
}

export async function getStaticProps({ params }: Params) {
  const post = await getPostById(params.id);
  return {
    props: { post: JSON.parse(JSON.stringify(post)) },
    revalidate: 60,
  };
}
