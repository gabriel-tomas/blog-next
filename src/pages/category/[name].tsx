import { GetServerSideProps } from 'next';
import { PostRoot } from '../../domain/posts/post-protocol';

import { getPosts } from '../../data/posts/get-all';

import CategoryPage from '../../containers/HomePage';

export type CategoryProps = {
  posts: PostRoot[];
  name: string;
};

export default function Category({ posts, name }: CategoryProps) {
  return <CategoryPage posts={posts} name={name} />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const name = Array.isArray(ctx.query.name) ? ctx.query.name[0] : ctx.query.name;
  const posts = await getPosts(
    `sort=id:desc&pagination[start]=0&pagination[limit]=15&filters[category][$eq]${name}`,
  );

  return {
    props: { posts, name },
  };
};
