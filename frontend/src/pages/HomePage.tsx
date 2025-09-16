import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Layout from '../components/layouts/Layout';
import PostGrid from '../components/posts/PostGrid';
import { fetchPosts } from '../apis/fetchPosts.api';
import ErrorPage from './ErrorPage';
import PageSpinner from '../components/ui/PageSpinner';

const HomePage = () => {
  const {
    data: posts = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

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
          <PageSpinner />
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
