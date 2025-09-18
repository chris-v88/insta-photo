import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAuthCheck } from '../../apis/auth.api';
import { useStore } from '../../stores';
import Spinner from '../ui/Spinner';

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const { setLogin, setLogout } = useStore();

  const { data, isLoading, error } = useQuery({
    queryKey: ['auth-check'],
    queryFn: getAuthCheck,
    retry: false, // Don't retry failed auth checks
    refetchOnWindowFocus: false,
    staleTime: Infinity, // Don't refetch unless explicitly invalidated
  });

  useEffect(() => {
    if (!isLoading) {
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
  }, [data, isLoading, error, setLogin, setLogout]);

  // Show loading spinner while checking authentication
  if (!isInitialized && isLoading) {
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
