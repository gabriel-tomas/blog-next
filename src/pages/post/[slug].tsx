import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import PostPage from '../../containers/PostPage';

import { getPosts } from '../../data/posts/get-all';
import { countAllPosts } from '../../data/posts/count-all';
import { getOnePost } from '../../data/posts/get-one';
import { PostRoot } from '../../domain/posts/post-protocol';
import Error from 'next/error';

export type PostProps = {
  post: PostRoot;
};

export default function Post({ post }: PostProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Carregando...</h1>;
  }

  if (!post?.attributes?.title) {
    return <Error statusCode={404} />;
  }

  return <PostPage post={post} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postCountAll = await countAllPosts();
  const posts = await getPosts(`pagination[limit]=${postCountAll}`);

  return {
    paths: posts.map((post) => ({ params: { slug: post.attributes.slug } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  let post: PostRoot | object = await getOnePost(context.params.slug);

  post = post || {};

  return {
    props: { post },
    revalidate: 600,
  };
};
