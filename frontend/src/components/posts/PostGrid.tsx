import React from 'react';
import { Post } from '../../types';
import PostCard from './PostCard';

interface PostGridProps {
  posts: Post[];
  columns?: 1 | 2 | 3;
  onLike?: (postId: string) => void;
}

const PostGrid: React.FC<PostGridProps> = (props: PostGridProps) => {
  const { posts, columns = 3, onLike } = props;

  const getGridClasses = () => {
    switch (columns) {
      case 1:
        return 'flex flex-col gap-6';
      case 2:
        return 'columns-1 md:columns-2 gap-6 space-y-6';
      case 3:
      default:
        return 'columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6';
    }
  };

  return (
    <div className={getGridClasses()}>
      {posts.map((post) => (
        <div key={post.id} className="break-inside-avoid mb-6">
          <PostCard post={post} onLike={onLike} />
        </div>
      ))}
    </div>
  );
};

export default PostGrid;
