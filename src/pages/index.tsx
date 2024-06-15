import { GetStaticProps } from 'next';
import { PostRoot } from '../domain/posts/post-protocol';
import { getPosts } from '../data/posts/get-all';

import HomePage from '../containers/HomePage';

export type HomeProps = {
  posts: PostRoot[];
};

export default function Home({ posts }: HomeProps) {
  return <HomePage posts={posts} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts('sort=id:desc&pagination[start]=0&pagination[limit]=20');

  return {
    props: { posts },
    revalidate: 3,
  };
};
