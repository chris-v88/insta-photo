export type User = {
  id: string;
  email: string;
  username: string;
  fullName: string;
  avatar?: string;
  bio?: string;
  createdAt: string;
  isAdmin?: boolean;
};

export type Post = {
  id: string;
  description?: string;
  imageUrl: string;
  user?: {
    id: string;
    username: string;
    avatar?: string;
  };
  likes: number;
  commentsCount: number;
  createdAt: string;
  isLikedByCurrentUser?: boolean;
};

export type Comment = {
  id: string;
  content: string;
  userId: string;
  photoId: string;
  user: User;
  createdAt: string;
  updatedAt: string;
};

export type PostDetail = {
  id: number;
  user_id: number;
  description?: string;
  image_url: string;
  created_at: string;
  updated_at: string;
  Users: {
    id: number;
    username: string;
    avatar?: string;
    full_name?: string;
  };
  likes_count: number;
  comments_count: number;
  isLikedByCurrentUser?: boolean;
  Comments: Array<{
    id: number;
    content: string;
    created_at: string;
    updated_at: string;
    user: {
      id: number;
      username: string;
      avatar?: string;
      fullName?: string;
    };
  }>;
};

export type AuthResponse = {
  user: User;
  token: string;
};

export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
};

export type PaginationMeta = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export type PaginatedResponse<T> = ApiResponse<T> & {
  meta?: PaginationMeta;
};
