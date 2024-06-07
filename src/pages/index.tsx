import { GetStaticProps } from 'next';
import { PostRoot } from '../domain/posts/post-protocol';
import { getPosts } from '../data/posts/get-all';

import Homepage from '../containers/HomePage';

export type HomeProps = {
  posts: PostRoot[];
};

export default function Home({ posts }: HomeProps) {
  return <Homepage posts={posts} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: { posts },
  };
};
