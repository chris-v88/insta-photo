import React from 'react';
import { Post } from '../../types';
import PostCard from './PostCard';

interface PostGridProps {
  posts: Post[];
  columns?: 1 | 2 | 3;
  onLike?: (photoId: string) => void;
}

const PostGrid: React.FC<PostGridProps> = (props: PostGridProps) => {
  const { posts, columns = 3, onLike } = props;

  const getGridClasses = () => {
    switch (columns) {
      case 1:
        return 'grid grid-cols-1 gap-6';
      case 2:
        return 'grid grid-cols-1 md:grid-cols-2 gap-6';
      case 3:
      default:
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
    }
  };

  return (
    <div className={getGridClasses()}>
      {posts.map((photo) => (
        <PostCard key={photo.id} photo={photo} onLike={onLike} />
      ))}
    </div>
  );
};

export default PostGrid;
