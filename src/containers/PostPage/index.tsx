import { BlocksRenderer } from '@strapi/blocks-react-renderer';

import { PostRoot } from '../../domain/posts/post-protocol';

import { ContainerPostPage } from './styled';

export type PostPageProps = {
  post: PostRoot;
};

export default function PostPage({ post }: PostPageProps) {
  return (
    <ContainerPostPage>
      <div className="container-content">
        <BlocksRenderer content={post.attributes.content} />
      </div>
    </ContainerPostPage>
  );
}
