export interface User {
  id: string;
  email: string;
  username: string;
  fullName: string;
  avatar?: string;
  bio?: string;
  createdAt: string;
  updatedAt: string;
  isAdmin?: boolean;
}

export interface Photo {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  userId: string;
  user: User;
  likes: number;
  commentsCount: number;
  createdAt: string;
  updatedAt: string;
  isLiked?: boolean;
  isSaved?: boolean;
}

export interface Comment {
  id: string;
  content: string;
  userId: string;
  photoId: string;
  user: User;
  createdAt: string;
  updatedAt: string;
}

export interface SavedPhoto {
  id: string;
  userId: string;
  photoId: string;
  photo: Photo;
  createdAt: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  meta?: PaginationMeta;
}
