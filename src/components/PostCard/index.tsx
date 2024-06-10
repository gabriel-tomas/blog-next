import Link from 'next/link';

import { PostRoot } from '../../domain/posts/post-protocol';

import { ContainerPostCard } from './styled';

export type PostCardProps = {
  post: PostRoot;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <ContainerPostCard>
      <Link className="container-img" href="/post/[slug]" as={`/post/${post.attributes.slug}`}>
        <img src={post.attributes.cover.data.attributes.formats.small.url} alt={post.attributes.title} />
      </Link>
      <h2>
        <Link className="container-img" href="/post/[slug]" as={`/post/${post.attributes.slug}`}>
          {post.attributes.title}
        </Link>
      </h2>
    </ContainerPostCard>
  );
}
