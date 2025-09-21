import { Link } from 'react-router-dom';
import { Post } from '../../types';

export type PostCardType = {
  photo: Post;

  onLike?: (photoId: string) => void;
};

const PostCard = (props: PostCardType) => {
  const { photo } = props;
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header */}
      <div className="flex items-center p-4"></div>

      {/* Image */}
      <Link to={`/photo/${photo.id}`}>
        <div className="aspect-square bg-gray-200">
          <img
            src={photo.imageUrl}
            alt="post-image"
            className="w-full h-full object-cover hover:opacity-95 transition-opacity"
          />
        </div>
      </Link>

      {/* Actions */}
    </div>
  );
};

export default PostCard;
