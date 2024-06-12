import { BlocksRenderer } from '@strapi/blocks-react-renderer';

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
    </ContainerPostPage>
  );
}
