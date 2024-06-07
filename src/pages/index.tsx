import { GetStaticProps } from 'next';
import { PostRoot } from '../domain/posts/post-protocol';
import { PostsProtocol } from '../domain/posts/posts-protocol';

const getPosts = async () => {
  const response = await fetch('https://blog-strapi-m47e.onrender.com/api/posts?populate=*');
  const data: PostsProtocol = await response.json();
  return data.data;
};

export type HomeProps = {
  posts: PostRoot[];
};

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <ul>{posts && posts.map((post) => <li key={post.id}>{post.attributes.title}</li>)}</ul>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: { posts },
  };
};
