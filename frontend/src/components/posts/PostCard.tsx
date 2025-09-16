import { Link } from 'react-router-dom';
import { Post } from '../../types';

export type PostCardType = {
  photo: Post;

  onLike?: (photoId: string) => void;
};

const PostCard = (props: PostCardType) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { photo, onLike } = props;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header */}
      <div className="flex items-center p-4">
        <Link to={`/user/${photo.user.id}`} className="flex items-center space-x-3">
          <img
            src={photo.user.avatar || `https://ui-avatars.com/api/background=random`}
            alt={'photo.user.fullName'}
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="font-medium text-gray-900">{photo.user.username}</p>
            <p className="text-sm text-gray-500">
              {new Date(photo.createdAt).toLocaleDateString()}
            </p>
          </div>
        </Link>
      </div>

      {/* Image */}
      <Link to={`/photo/${photo.id}`}>
        <div className="aspect-square bg-gray-200">
          <img
            src={photo.imageUrl}
            alt={photo.title}
            className="w-full h-full object-cover hover:opacity-95 transition-opacity"
          />
        </div>
      </Link>

      {/* Actions */}
    </div>
  );
};

export default PostCard;
