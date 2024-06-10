import PostCard from '../../components/PostCard';
import { PostRoot } from '../../domain/posts/post-protocol';

import { Container } from './styled';

export type HomePageProps = {
  posts: PostRoot[];
};

export default function Homepage({ posts }: HomePageProps) {
  return (
    <Container>
      <ul>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </ul>
    </Container>
  );
}
