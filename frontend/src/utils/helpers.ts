import {
  PaginatedFeedSchema,
  PostResponse,
  PublicProfile,
  UserProfilePost,
} from '../schemas/response';
import { Post } from '../types';

export const transformFeed = (data: PaginatedFeedSchema) => {
  const posts: Post[] = data.data.map((item: PostResponse) => ({
    id: String(item.id),
    description: item.description,
    imageUrl: item.image_url,
    user: item.Users
      ? {
          id: String(item.Users.id),
          username: item.Users.username,
          avatar: item.Users.avatar,
        }
      : undefined,
    likes: item.likes_count ?? 0,
    commentsCount: item.comments_count ?? 0,
    createdAt: item.created_at,
    isLikedByCurrentUser: item.isLikedByCurrentUser ?? false,
  }));
  return {
    posts,
    page: data.page,
    limit: data.limit,
    totalPages: data.totalPages,
    totalPosts: data.totalPosts,
  };
};

export const transformUserProfilePosts = (userProfile: PublicProfile): Post[] => {
  const userPosts = userProfile.posts || [];
  return userPosts.map((post: UserProfilePost) => ({
    id: post.id.toString(),
    description: post.description || '',
    imageUrl: post.imageUrl,
    user: {
      id: userProfile.id.toString(),
      email: '',
      username: userProfile.username,
      fullName: userProfile.fullName || '',
      avatar: userProfile.avatar || '',
      bio: userProfile.bio || '',
      createdAt: userProfile.createdAt,
    },
    likes: post.likesCount || 0,
    commentsCount: post.commentsCount || 0,
    createdAt: post.createdAt,
    isLikedByCurrentUser: item.isLikedByCurrentUser ?? false,
  }));
};
