import { BlocksRenderer } from '@strapi/blocks-react-renderer';

import { PostRoot } from '../../domain/posts/post-protocol';

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
      <div className="container-main-content">
        <BlocksRenderer content={post.attributes.content} />
      </div>
    </ContainerPostPage>
  );
}
