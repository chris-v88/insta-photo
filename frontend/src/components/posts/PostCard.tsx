import { Link } from 'react-router-dom';
import { Post } from '../../types';
import Icon from '../ui/Icon';

export type PostCardType = {
  post: Post;

  onLike?: (postId: string) => void;
};

const PostCard = (props: PostCardType) => {
  const { post } = props;

  const isLiked = false; // Placeholder for now

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex items-center p-4">
        <Link to={`/user/${post.user?.id}`} className="flex items-center space-x-3">
          {post.user?.avatar ? (
            <img
              src={post.user?.avatar}
              alt={post.user?.username}
              className="w-8 h-8 rounded-full"
            />
          ) : (
            <Icon name="User" size={32} className="text-gray-400" />
          )}
          <div>
            <p className="font-medium text-gray-900">{post.user?.username}</p>
            <p className="text-sm text-gray-500">{new Date(post.createdAt).toLocaleDateString()}</p>
          </div>
        </Link>
      </div>

      <Link to={`/post/${post.id}`}>
        <div className="aspect-square bg-gray-200">
          <img
            src={post.imageUrl}
            alt="post-post"
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
              to={`/post/${post.id}`}
              className="p-1 text-gray-700 hover:text-blue-500 transition-colors"
            >
              <Icon name="MessageCircle" className="w-6 h-6" />
            </Link>
          </div>
        </div>

        <p className="font-medium text-gray-900 mb-2">
          {post.likes} {post.likes === 1 ? 'like' : 'likes'}
        </p>

        <div className="text-gray-900">
          <Link to={`/user/${post.user?.id}`} className="font-medium">
            {post.user?.username}
          </Link>{' '}
          <span>{post.description}</span>
        </div>

        {post.commentsCount > 0 && (
          <Link
            to={`/post/${post.id}`}
            className="text-gray-500 text-sm mt-2 block hover:text-gray-700"
          >
            View all {post.commentsCount} comments
          </Link>
        )}
      </div>
    </div>
  );
};

export default PostCard;
