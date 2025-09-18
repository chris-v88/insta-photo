import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { getAuthCheck } from '../../apis/auth.api';
import { useStore } from '../../stores';
import Spinner from '../ui/Spinner';

export type AuthProviderProps = {
  children: React.ReactNode;
};

export const PUBLIC_ROUTES = ['/login', '/register'];

const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props;

  const [isInitialized, setIsInitialized] = useState(false);
  const { setLogin, setLogout, isAuthenticated } = useStore();
  const location = useLocation();

  const shouldCheckAuth = !isInitialized && !PUBLIC_ROUTES.includes(location.pathname);

  const { data, isLoading, error } = useQuery({
    queryKey: ['auth-check'],
    queryFn: getAuthCheck,
    enabled: shouldCheckAuth,
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  useEffect(() => {
    if (PUBLIC_ROUTES.includes(location.pathname) && !isAuthenticated) {
      setIsInitialized(true);
      return;
    }

    if (!isLoading && shouldCheckAuth) {
      if (data && data.isAuthenticated && data.user) {
        const user = {
          id: String(data.user.id),
          email: data.user.email,
          username: data.user.username,
          fullName: data.user.full_name ?? '',
          avatar: data.user.avatar ?? '',
          bio: data.user.bio ?? '',
          createdAt: data.user.created_at ?? '',
          updatedAt: data.user.updated_at ?? '',
          isAdmin: data.user.is_admin ?? false,
        };
        setLogin(user);
      } else {
        setLogout();
      }
      setIsInitialized(true);
    }

    // If auth check failed or we shouldn't check, just initialize
    if (!shouldCheckAuth && !isInitialized) {
      setIsInitialized(true);
    }
  }, [
    data,
    isLoading,
    error,
    setLogin,
    setLogout,
    shouldCheckAuth,
    isInitialized,
    location.pathname,
    isAuthenticated,
  ]);

  // Show loading spinner only when we're checking auth for the first time
  if (!isInitialized && shouldCheckAuth && isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            InstaPhoto
          </h1>
          <Spinner />
          <p className="text-gray-600 mt-4">Checking authentication...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthProvider;
