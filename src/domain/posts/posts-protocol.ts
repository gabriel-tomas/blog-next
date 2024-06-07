import { PostRoot } from './post-protocol';

export interface PostsProtocol {
  data: PostRoot[];
  meta: Meta;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
