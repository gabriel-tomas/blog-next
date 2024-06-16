import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Error from 'next/error';
import { PostRoot } from '../../../domain/posts/post-protocol';
import { PaginationProtocol } from '../../../domain/posts/pagination-protocol';

import { countAllPosts } from '../../../data/posts/count-all';
import { getPosts } from '../../../data/posts/get-all';

import HomePage from '../../../containers/HomePage';
import Pagination from '../../../components/Pagination';

export type PageProps = {
  posts: PostRoot[];
  pagination?: PaginationProtocol;
};

export default function Page({ posts, pagination }: PageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Carregando...</h1>;
  }

  if (posts.length === 0) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      <HomePage posts={posts} />
      <Pagination {...pagination} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { param } = ctx.params;

  const pageNumber = (Array.isArray(param) ? Number(param[0]) : Number(param)) - 1;

  console.log(pageNumber);

  const postsPerPage = 2;

  const postsCount = await countAllPosts();

  const posts = await getPosts(
    `sort=id:desc&pagination[start]=${pageNumber * 2}&pagination[limit]=${postsPerPage}`,
  );

  const pagination: PaginationProtocol = {
    nextPage: pageNumber + 1,
    numberOfPosts: postsCount,
    postsPerPage,
    previousPage: pageNumber,
  };

  return {
    props: { posts, pagination },
  };
};
