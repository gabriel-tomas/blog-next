import { PostsProtocol } from '../../domain/posts/posts-protocol';
import { fetchJson } from '../../utils/fetch-json';

export const getOnePost = async (slug: string | string[], query = '') => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;

  const url = `${process.env.API_URL_POSTS}?populate=*&${query}&filters[slug][$eq]=${slugString}`;

  const data = await fetchJson<PostsProtocol>(url);
  return data.data[0];
};
