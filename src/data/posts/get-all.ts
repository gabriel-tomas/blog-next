import { PostsProtocol } from '../../domain/posts/posts-protocol';
import { fetchJson } from '../../utils/fetch-json';

export const getPosts = async () => {
  const data = await fetchJson<PostsProtocol>(process.env.API_URL_POSTS);
  return data.data;
};
