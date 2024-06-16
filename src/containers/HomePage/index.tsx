import Link from 'next/link';
import PostCard from '../../components/PostCard';
import { PostRoot } from '../../domain/posts/post-protocol';

import { Container } from './styled';

export type HomePageProps = {
  posts: PostRoot[];
  name?: string;
  dontShowAllPostsLink?: boolean;
};

export default function Homepage({ posts, name, dontShowAllPostsLink }: HomePageProps) {
  return (
    <Container>
      {name && <span>Categoria: {name}</span>}
      <ul>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </ul>
      {!dontShowAllPostsLink && (
        <Link href="/post/page/[param]" as="/post/page/1">
          Ver todos os posts
        </Link>
      )}
    </Container>
  );
}
