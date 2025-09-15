import React, { useEffect, useState } from 'react';
import Layout from '../components/layouts/Layout';
// import PageSpinner from '../components/ui/PageSpinner';

const HomePage: React.FC = () => {

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Discover Amazing Photos</h1>
          <p className="text-gray-600">
            Explore the latest photos from photographers around the world
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
