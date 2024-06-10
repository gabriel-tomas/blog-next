import { PostsProtocol } from '../../domain/posts/posts-protocol';
import { fetchJson } from '../../utils/fetch-json';

export const getPosts = async (query = '') => {
  const url = `${process.env.API_URL_POSTS}&${query}`;

  const data = await fetchJson<PostsProtocol>(url);
  return data.data;
};
