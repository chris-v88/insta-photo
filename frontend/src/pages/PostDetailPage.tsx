import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchPostDetail, toggleLikePost, addComment } from '../apis/post.api';
import { useStore } from '../stores';
import { PostDetail } from '../types';
import Layout from '../components/layouts/Layout';
import Spinner from '../components/ui/Spinner';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Icon from '../components/ui/Icon';

const PostDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const user = useStore((state) => state.user);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [newComment, setNewComment] = useState('');

  // Fetch post details
  const {
    data: postDetail,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['post-detail', id],
    queryFn: () => {
      if (!id) throw new Error('Post ID is required');
      return fetchPostDetail(id);
    },
    enabled: !!id,
  });

  // Toggle like mutation
  const toggleLikeMutation = useMutation({
    mutationFn: (postId: string) => toggleLikePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['post-detail', id] });
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
    onError: (error) => {
      console.error('Toggle like failed:', error);
    },
  });

  // Add comment mutation
  const addCommentMutation = useMutation({
    mutationFn: ({ postId, content }: { postId: string; content: string }) =>
      addComment(postId, content),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['post-detail', id] });
      setNewComment('');
    },
    onError: (error) => {
      console.error('Add comment failed:', error);
    },
  });

  const handleToggleLike = () => {
    if (!user || !id) return;
    toggleLikeMutation.mutate(id);
  };

  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !id || !user) return;
    addCommentMutation.mutate({ postId: id, content: newComment.trim() });
  };

  const handleDeletePhoto = async () => {
    if (!postDetail || !user || postDetail.user_id !== user.id) return;

    if (window.confirm('Are you sure you want to delete this photo?')) {
      try {
        // TODO: Implement delete functionality
        navigate('/profile');
      } catch (err) {
        console.error('Error deleting photo:', err);
      }
    }
  };

  const handleShare = async () => {
    if (navigator.share && postDetail) {
      try {
        await navigator.share({
          title: postDetail.description || 'Check out this post',
          text: postDetail.description,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-[400px]">
          <Spinner size="lg" />
        </div>
      </Layout>
    );
  }

  if (error || !postDetail) {
    return (
      <Layout>
        <div className="text-center py-12">
          <p className="text-red-600 text-lg">{error?.message || 'Post not found'}</p>
          <Link
            to="/"
            className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Go Home
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2"
        >
          <Icon name="ArrowLeft" size={16} />
          Back
        </Button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Image */}
            <div className="md:flex-1">
              <img
                src={postDetail.image_url}
                alt={postDetail.description || 'Post image'}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Details */}
            <div className="md:w-96 p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <Link
                  to={`/profile/${postDetail.Users.username}`}
                  className="flex items-center space-x-3"
                >
                  <img
                    src={
                      postDetail.Users.avatar ||
                      `https://ui-avatars.com/api/?name=${postDetail.Users.full_name || postDetail.Users.username}&background=random`
                    }
                    alt={postDetail.Users.full_name || postDetail.Users.username}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{postDetail.Users.username}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(postDetail.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </Link>

                {user?.id === postDetail.user_id && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleDeletePhoto}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Icon name="Trash2" size={16} />
                  </Button>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleToggleLike}
                    disabled={toggleLikeMutation.isPending}
                    className={`p-1 rounded-full transition-colors ${
                      postDetail.isLikedByCurrentUser
                        ? 'text-red-500 hover:text-red-600'
                        : 'text-gray-700 hover:text-red-500'
                    } ${toggleLikeMutation.isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {toggleLikeMutation.isPending ? (
                      <Icon name="Loader2" className="animate-spin" size={24} />
                    ) : (
                      <Icon
                        name="Heart"
                        size={24}
                        className={postDetail.isLikedByCurrentUser ? 'fill-current' : ''}
                      />
                    )}
                  </button>
                  <button className="p-1 text-gray-700 hover:text-blue-500 transition-colors">
                    <Icon name="MessageCircle" size={24} />
                  </button>
                  <button
                    onClick={handleShare}
                    className="p-1 text-gray-700 hover:text-blue-500 transition-colors"
                  >
                    <Icon name="Share" size={24} />
                  </button>
                </div>
                <button className="p-1 text-gray-700 hover:text-blue-500 transition-colors">
                  <Icon name="Bookmark" size={24} />
                </button>
              </div>

              {/* Likes */}
              <p className="font-medium text-gray-900 mb-4">
                {postDetail.likes_count} {postDetail.likes_count === 1 ? 'like' : 'likes'}
              </p>

              {/* Caption */}
              <div className="text-gray-900 mb-6">
                <span className="font-medium">{postDetail.Users.username}</span>{' '}
                {postDetail.description}
              </div>

              {/* Comments */}
              <div className="border-t pt-4">
                <h3 className="font-medium text-gray-900 mb-4">Comments</h3>

                <div className="space-y-4 mb-4 max-h-64 overflow-y-auto">
                  {postDetail.Comments?.map((comment: PostDetail['Comments'][0]) => (
                    <div key={comment.id} className="flex space-x-3">
                      <img
                        src={
                          comment.user.avatar ||
                          `https://ui-avatars.com/api/?name=${comment.user.fullName || comment.user.username}&background=random`
                        }
                        alt={comment.user.fullName || comment.user.username}
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-medium">{comment.user.username}</span>{' '}
                          {comment.content}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(comment.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add comment */}
                {user && (
                  <form onSubmit={handleAddComment} className="flex space-x-3">
                    <img
                      src={
                        user.avatar ||
                        `https://ui-avatars.com/api/?name=${user.fullName}&background=random`
                      }
                      alt={user.fullName}
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="flex-1">
                      <Input
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add a comment..."
                        className="text-sm"
                        disabled={addCommentMutation.isPending}
                      />
                    </div>
                    <Button
                      type="submit"
                      size="sm"
                      disabled={!newComment.trim() || addCommentMutation.isPending}
                      isLoading={addCommentMutation.isPending}
                    >
                      Post
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostDetailPage;
