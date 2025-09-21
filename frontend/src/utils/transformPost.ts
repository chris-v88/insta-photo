import { PaginatedFeedSchema, PostResponse } from '../schemas/response';
import { Post } from '../types';

export const transformPosts = (data: PaginatedFeedSchema) => {
  const posts: Post[] = data.data.map((item: PostResponse) => ({
    id: String(item.id),
    title: item.title,
    description: item.description,
    imageUrl: item.image_url,
    user: item.Users
      ? {
          id: String(item.Users.id),
          username: item.Users.username,
          avatar: item.Users.avatar,
          email: '',
          fullName: '',
          createdAt: '',
        }
      : undefined,
    likes: item.likes_count,
    commentsCount: item.comments_count,
    createdAt: item.created_at,
  }));
  return {
    posts,
    page: data.page,
    limit: data.limit,
    totalPages: data.totalPages,
    totalPosts: data.totalPosts,
  };
};
