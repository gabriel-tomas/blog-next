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
      <header>
        <h2>{post.attributes.title}</h2>
      </header>
      <div className="container-post-cover">
        <img src={post.attributes.cover.data.attributes.formats.large.url} alt={post.attributes.title} />
      </div>
      <div className="container-post-details">
        <span>
          Publicado por {post.attributes.author.data.attributes.name} em{' '}
          {formatDate(post.attributes.createdAt)} | categoria: {post.attributes.category.data.attributes.name}
        </span>
      </div>
      <div className="container-main-content">
        <BlocksRenderer content={post.attributes.content} />
      </div>
      <div className="container-comments">
        <DiscussionEmbed
          shortname="blog-next-9"
          config={{
            url: `/post/${post.attributes.slug}`,
            identifier: post.attributes.slug,
            title: post.attributes.title,
            language: 'pt_BR',
          }}
        />
      </div>
    </ContainerPostPage>
  );
}
