import { Post } from '../types';

export function transformPost(raw: any): Post {
  return {
    id: String(raw.id),
    title: raw.title,
    description: raw.description,
    imageUrl: raw.image_url,
    likes: raw.likes_count,
    commentsCount: raw.comments_count,
    createdAt: raw.created_at,
  };
}

export function transformPosts(rawList: any[]): Post[] {
  return rawList.map(transformPost);
}
