import Link from 'next/link';
import { PaginationProtocol } from '../../domain/posts/pagination-protocol';

import { Container } from './styled';

export default function Pagination({
  nextPage,
  numberOfPosts,
  postsPerPage,
  previousPage,
}: PaginationProtocol) {
  const nextLink = `/post/page/${nextPage + 1}`;
  const previousLink = `/post/page/${previousPage}`;
  const hasNextPage = nextPage * postsPerPage < numberOfPosts;
  const hasPreviousPage = previousPage > 0;
  return (
    <Container>
      {hasPreviousPage && (
        <Link href="/post/page/[param]" as={previousLink}>
          Anterior
        </Link>
      )}
      {hasNextPage && (
        <Link className="next-page" href="/post/page/[param]" as={nextLink}>
          Próximo
        </Link>
      )}
    </Container>
  );
}
