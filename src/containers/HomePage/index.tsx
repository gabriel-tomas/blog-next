import PostCard from '../../components/PostCard';
import { PostRoot } from '../../domain/posts/post-protocol';

import { Container } from './styled';

export type HomePageProps = {
  posts: PostRoot[];
  name?: string;
};

export default function Homepage({ posts, name }: HomePageProps) {
  return (
    <Container>
      {name && <span>Categoria: {name}</span>}
      <ul>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </ul>
    </Container>
  );
}
