import React, { useState, useRef } from 'react';
import { Grid, Bookmark, Settings as SettingsIcon, Upload, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { getUserProfile, uploadUserAvatar } from '../../apis/user.api';
import Layout from '../../components/layouts/Layout';
import Spinner from '../../components/ui/Spinner';
import Button from '../../components/ui/Button';
import { UserProfilePost } from '../../schemas/response';

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'photos' | 'saved'>('photos');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  const {
    data: userProfile,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['user-profile'],
    queryFn: getUserProfile,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  const avatarUploadMutation = useMutation({
    mutationFn: uploadUserAvatar,
    onSuccess: () => {
      // Invalidate and refetch user profile
      queryClient.invalidateQueries({ queryKey: ['user-profile'] });
      // Also invalidate auth check to update navbar
      queryClient.invalidateQueries({ queryKey: ['auth-check'] });
    },
    onError: (error) => {
      console.error('Avatar upload failed:', error);
      // You can add toast notification here
    },
  });

  const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      avatarUploadMutation.mutate(file);
    }
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
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

  if (error || !userProfile) {
    return (
      <Layout>
        <div className="text-center py-12">
          <p className="text-red-600 text-lg">{error?.message || 'Failed to load profile'}</p>
        </div>
      </Layout>
    );
  }

  const currentPhotos = activeTab === 'photos' ? userProfile.posts || [] : [];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
            <div className="relative">
              <img
                src={
                  userProfile.avatar ||
                  `https://ui-avatars.com/api/?name=${userProfile.fullName || userProfile.username}&background=random&size=128`
                }
                alt={userProfile.fullName || userProfile.username}
                className="w-32 h-32 rounded-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                onClick={handleAvatarClick}
              />
              <button
                onClick={handleAvatarClick}
                disabled={avatarUploadMutation.isPending}
                className="absolute bottom-2 right-2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow-lg transition-colors disabled:opacity-50"
                title="Change avatar"
              >
                {avatarUploadMutation.isPending ? (
                  <Spinner size="sm" />
                ) : (
                  <Camera className="w-4 h-4" />
                )}
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleAvatarUpload}
                className="hidden"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-4">
                <h1 className="text-2xl font-bold text-gray-900">{userProfile.username}</h1>
                <Link to="/settings">
                  <Button variant="outline" size="sm" leftIcon={SettingsIcon}>
                    Edit Profile
                  </Button>
                </Link>
              </div>

              <p className="text-gray-600 mb-4">{userProfile.fullName}</p>

              {userProfile.bio && <p className="text-gray-700 mb-4">{userProfile.bio}</p>}

              <div className="flex justify-center md:justify-start space-x-8 text-sm">
                <div className="text-center">
                  <span className="font-bold text-gray-900 block">{userProfile.postsCount}</span>
                  <span className="text-gray-500">posts</span>
                </div>
                <div className="text-center">
                  <span className="font-bold text-gray-900 block">
                    {userProfile.followersCount || 0}
                  </span>
                  <span className="text-gray-500">followers</span>
                </div>
                <div className="text-center">
                  <span className="font-bold text-gray-900 block">
                    {userProfile.followingCount || 0}
                  </span>
                  <span className="text-gray-500">following</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('photos')}
              className={`flex items-center space-x-2 px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'photos'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Grid className="w-4 h-4" />
              <span>Posts</span>
            </button>
            <button
              onClick={() => setActiveTab('saved')}
              className={`flex items-center space-x-2 px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'saved'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Bookmark className="w-4 h-4" />
              <span>Saved</span>
            </button>
          </div>
        </div>

        {/* Post Grid */}
        {currentPhotos.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 text-gray-300">
              {activeTab === 'photos' ? (
                <Grid className="w-full h-full" />
              ) : (
                <Bookmark className="w-full h-full" />
              )}
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {activeTab === 'photos' ? 'No posts yet' : 'No saved photos'}
            </h3>
            <p className="text-gray-500">
              {activeTab === 'photos'
                ? 'Start sharing your photography with the world!'
                : 'Save photos you love to view them later.'}
            </p>
            {activeTab === 'photos' && (
              <Link to="/create" className="mt-4 inline-block">
                <Button leftIcon={Upload}>Upload Your First Post</Button>
              </Link>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-1 md:gap-4">
            {currentPhotos.map((photo: UserProfilePost) => (
              <Link
                key={photo.id}
                to={`/photo/${photo.id}`}
                className="aspect-square bg-gray-200 hover:opacity-90 transition-opacity"
              >
                <img
                  src={photo.imageUrl}
                  alt={photo.title || 'Post'}
                  className="w-full h-full object-cover"
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProfilePage;
