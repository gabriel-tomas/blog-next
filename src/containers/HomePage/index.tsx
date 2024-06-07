import { PostRoot } from '../../domain/posts/post-protocol';

import { Container } from './styled';

export type HomePageProps = {
  posts: PostRoot[];
};

export default function Homepage({ posts }: HomePageProps) {
  return (
    <Container>
      <ul>{posts && posts.map((post) => <li key={post.id}>{post.attributes.title}</li>)}</ul>
    </Container>
  );
}
