import React from 'react';
import { Post } from '../../types';
import PostCard from './PostCard';
import PageSpinner from '../ui/PageSpinner';

interface PostGridProps {
  posts: Post[];

  onLike?: (photoId: string) => void;
}

const PostGrid: React.FC<PostGridProps> = (props: PostGridProps) => {
  const { posts, onLike } = props;

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No posts found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((photo) => (
        <PostCard key={photo.id} photo={photo} onLike={onLike} />
      ))}
    </div>
  );
};

export default PostGrid;
