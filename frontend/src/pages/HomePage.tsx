import React, { useEffect } from 'react';
import { useStore } from '../stores';
import { useQuery } from '@tanstack/react-query';
import Layout from '../components/layouts/Layout';
// import PostGrid from '../components/posts/PostGrid';
import { fetchPosts } from '../apis/fetchPosts.api';
import ErrorPage from './ErrorPage';
import Spinner from '../components/ui/Spinner';
import { Post } from '../types';

const HomePage = () => {
  const setPosts = useStore((state) => state.setPosts);
  const {
    data = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  useEffect(() => {
    const posts: Post[] = data?.map((post) => ({
      id: String(post.id),
      title: post.title,
      description: post.description,
      imageUrl: post.image_url,
      likes: post.likes_count,
      commentsCount: post.comments_count,
      createdAt: post.created_at,
    }));
    setPosts(posts || []);
  }, [data, setPosts]);

  if (isLoading) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Discover Amazing Photos</h1>
            <p className="text-gray-600">
              Explore the latest photos from photographers around the world
            </p>
          </div>
          <Spinner />
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto">
          <ErrorPage error={error as Error} onRetry={() => refetch()} showHomeButton={false} />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Discover Amazing Photos</h1>
          <p className="text-gray-600">
            Explore the latest photos from photographers around the world
          </p>
        </div>
        {/* <PostGrid posts={posts} /> */}
      </div>
    </Layout>
  );
};

export default HomePage;
