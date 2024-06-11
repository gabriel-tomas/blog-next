import { GetStaticPaths, GetStaticProps } from 'next';
import ContainerPostPage from '../../containers/PostPage';

import { getPosts } from '../../data/posts/get-all';
import { countAllPosts } from '../../data/posts/count-all';
import { getOnePost } from '../../data/posts/get-one';
import { PostRoot } from '../../domain/posts/post-protocol';

export type PostProps = {
  post: PostRoot;
};

export default function Post({ post }: PostProps) {
  console.log(post);
  return <ContainerPostPage />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postCountAll = await countAllPosts();
  const posts = await getPosts(`pagination[limit]=${postCountAll}`);

  return {
    paths: posts.map((post) => ({ params: { slug: post.attributes.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const post = await getOnePost(context.params.slug);

  return {
    props: { post },
  };
};