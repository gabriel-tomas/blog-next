export interface PostRoot {
  id: number;
  attributes: PostAttributes;
}

export interface PostAttributes {
  title: string;
  content: Content[];
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover: Cover;
  author: Author;
  category: Category;
}

export interface Content {
  type: string;
  level?: number;
  children: Children[];
}

export interface Children {
  text: string;
  type: string;
}

export interface Cover {
  data: Data;
}

export interface Data {
  id: number;
  attributes: Attributes2;
}

export interface Attributes2 {
  name: string;
  alternativeText: unknown;
  caption: unknown;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: unknown;
  provider: string;
  provider_metadata: ProviderMetadata5;
  createdAt: string;
  updatedAt: string;
}

export interface Formats {
  large: Large;
  small: Small;
  medium: Medium;
  thumbnail: Thumbnail;
}

export interface Large {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: unknown;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
  provider_metadata: ProviderMetadata;
}

export interface ProviderMetadata {
  public_id: string;
  resource_type: string;
}

export interface Small {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: unknown;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
  provider_metadata: ProviderMetadata2;
}

export interface ProviderMetadata2 {
  public_id: string;
  resource_type: string;
}

export interface Medium {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: unknown;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
  provider_metadata: ProviderMetadata3;
}

export interface ProviderMetadata3 {
  public_id: string;
  resource_type: string;
}

export interface Thumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: unknown;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
  provider_metadata: ProviderMetadata4;
}

export interface ProviderMetadata4 {
  public_id: string;
  resource_type: string;
}

export interface ProviderMetadata5 {
  public_id: string;
  resource_type: string;
}

export interface Author {
  data: Data2;
}

export interface Data2 {
  id: number;
  attributes: Attributes3;
}

export interface Attributes3 {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Category {
  data: Data3;
}

export interface Data3 {
  id: number;
  attributes: Attributes4;
}

export interface Attributes4 {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
