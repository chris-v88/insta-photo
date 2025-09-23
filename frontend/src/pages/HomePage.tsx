import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import Dropdown from '../components/ui/Dropdown';
import ErrorPage from './ErrorPage';
import Layout from '../components/layouts/Layout';
import PostGrid from '../components/posts/PostGrid';
import Spinner from '../components/ui/Spinner';

import { useStore } from '../stores';
import { fetchPosts } from '../apis/fetchPosts.api';
import { transformFeed } from '../utils/helpers';
import { PaginatedFeedSchema } from '../schemas/response';
import Pagination from '../components/ui/Pagination';

const HomePage = () => {
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(10);
  const [page, setPage] = useState(1);

  const posts = useStore((state) => state.posts);
  const setPosts = useStore((state) => state.setPosts);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['posts', limit, page],
    queryFn: () => fetchPosts({ limit, page }),
  });

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    if (!data || Array.isArray(data)) {
      setPosts([]);
      setTotalPages(1);
      setPage(1);
      return;
    }
    const { posts, totalPages } = transformFeed(data as PaginatedFeedSchema);
    setPosts(posts);
    setTotalPages(totalPages);
  }, [page, data, setPosts]);

  useEffect(() => {
    setPage(1); // Reset to first page when limit changes
  }, [limit]);

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
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Discover Amazing Photos</h1>
            <p className="text-gray-600">
              Explore the latest photos from photographers around the world
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-700">Show</span>
            <Dropdown
              className="w-20"
              value={limit}
              onChange={(v) => setLimit(Number(v))}
              options={[
                { label: 10, value: 10 },
                { label: 20, value: 20 },
                { label: 35, value: 35 },
                { label: 50, value: 50 },
              ]}
            />
            <span className="text-gray-700">posts</span>
          </div>
        </div>
        {posts && posts?.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No posts found</p>
          </div>
        ) : (
          <PostGrid posts={posts} columns={2} />
        )}
        <Pagination
          page={page}
          totalPages={data?.totalPages || 1}
          onPageChange={handlePageChange}
        />
      </div>
    </Layout>
  );
};

export default HomePage;
