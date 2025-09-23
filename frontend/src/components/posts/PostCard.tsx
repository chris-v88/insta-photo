import { Link } from 'react-router-dom';
import { Post } from '../../types';
import Icon from '../ui/Icon';

export type PostCardType = {
  photo: Post;

  onLike?: (photoId: string) => void;
};

const PostCard = (props: PostCardType) => {
  const { photo } = props;

  const isLiked = false; // Placeholder for now

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex items-center p-4">
        <Link to={`/user/${photo.user?.id}`} className="flex items-center space-x-3">
          {photo.user?.avatar ? (
            <img
              src={photo.user?.avatar}
              alt={photo.user?.username}
              className="w-8 h-8 rounded-full"
            />
          ) : (
            <Icon name="User" size={32} className="text-gray-400" />
          )}
          <div>
            <p className="font-medium text-gray-900">{photo.user?.username}</p>
            <p className="text-sm text-gray-500">
              {new Date(photo.createdAt).toLocaleDateString()}
            </p>
          </div>
        </Link>
      </div>

      <Link to={`/photo/${photo.id}`}>
        <div className="aspect-square bg-gray-200">
          <img
            src={photo.imageUrl}
            alt="post-photo"
            className="w-full h-full object-cover hover:opacity-95 transition-opacity"
          />
        </div>
      </Link>

      {/* Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <button
              // onClick={handleLike}
              // disabled={isLoading}
              className={`p-1 rounded-full transition-colors ${
                isLiked ? 'text-red-500 hover:text-red-600' : 'text-gray-700 hover:text-red-500'
              }`}
            >
              <Icon name="Heart" className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
            </button>
            <Link
              to={`/photo/${photo.id}`}
              className="p-1 text-gray-700 hover:text-blue-500 transition-colors"
            >
              <Icon name="MessageCircle" className="w-6 h-6" />
            </Link>
          </div>
        </div>

        <p className="font-medium text-gray-900 mb-2">
          {photo.likes} {photo.likes === 1 ? 'like' : 'likes'}
        </p>

        <div className="text-gray-900">
          <Link to={`/user/${photo.user?.id}`} className="font-medium">
            {photo.user?.username}
          </Link>{' '}
          <span>{photo.description}</span>
        </div>

        {photo.commentsCount > 0 && (
          <Link
            to={`/photo/${photo.id}`}
            className="text-gray-500 text-sm mt-2 block hover:text-gray-700"
          >
            View all {photo.commentsCount} comments
          </Link>
        )}
      </div>
    </div>
  );
};

export default PostCard;
