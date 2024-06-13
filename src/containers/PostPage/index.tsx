import Head from 'next/head';
import Link from 'next/link';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { DiscussionEmbed } from 'disqus-react';

import { PostRoot } from '../../domain/posts/post-protocol';

import { formatDate } from '../../utils/format-date';

import { ContainerPostPage } from './styled';

export type PostPageProps = {
  post: PostRoot;
};

export default function PostPage({ post }: PostPageProps) {
  return (
    <ContainerPostPage>
      <Head>
        <title>
          {post.attributes.title} | {post.attributes.author.data.attributes.name} | Blog Next
        </title>
      </Head>
      <header>
        <h2>{post.attributes.title}</h2>
      </header>
      <div className="container-post-cover">
        <img src={post.attributes.cover.data.attributes.formats.large.url} alt={post.attributes.title} />
      </div>
      <div className="container-post-details">
        <span>
          Publicado por {post.attributes.author.data.attributes.name} em{' '}
          {formatDate(post.attributes.createdAt)} | categoria:{' '}
          <Link href={`/category/${post.attributes.category.data.attributes.name}`}>
            {post.attributes.category.data.attributes.name}
          </Link>
        </span>
      </div>
      <div className="container-main-content">
        <BlocksRenderer content={post.attributes.content} />
      </div>
      <div className="container-comments">
        <DiscussionEmbed
          shortname="blog-next-9"
          config={{
            url: `${process.env.NEXT_PUBLIC_APP_URL}/post/${post.attributes.slug}`,
            identifier: post.attributes.slug,
            title: post.attributes.title,
            language: 'pt_BR',
          }}
        />
      </div>
    </ContainerPostPage>
  );
}
