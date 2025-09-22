import React from 'react';
import { Navigate } from 'react-router-dom';
import { useStore } from '../stores';

const ProfileRedirect = () => {
  const isAuthenticated = useStore((state) => state.isAuthenticated);
  const user = useStore((state) => state.user);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (user?.username) {
    return <Navigate to={`/profile/${user.username}`} replace />;
  }

  // Fallback if user is authenticated but no username found
  return <Navigate to="/login" replace />;
};

export default ProfileRedirect;
