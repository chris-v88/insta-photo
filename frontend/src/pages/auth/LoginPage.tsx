import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';

import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { LoginFormData, loginSchema } from '../../schemas/form-login.schema';
import { postLoginUser } from '../../apis/login.api';
import { useStore } from '../../stores';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const setLogin = useStore((state) => state.setLogin);
  const [apiError, setApiError] = useState<string>('');

  // Get success message from navigation state
  const successMessage = location.state?.message;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
  });

  const { mutate: login, isPending } = useMutation({
    mutationFn: postLoginUser,
    onSuccess: (data) => {
      const user = {
        id: String(data.id),
        email: data.email,
        username: data.username,
        fullName: data.full_name ?? '',
        avatar: data.avatar ?? '',
        bio: data.bio ?? '',
        createdAt: data.created_at ?? '',
        updatedAt: data.updated_at ?? '',
        isAdmin: data.is_admin ?? false,
      };
      setLogin(user);
      navigate('/');
    },
    onError: (error: Error) => {
      setApiError(error.message);
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    if (isPending) return;
    setApiError('');
    login({
      username: data.username,
      password: data.password,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="text-center text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            InstaPhoto
          </h1>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Log in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            or{' '}
            <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
              Sign up for an account
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {successMessage && (
            <div className="bg-green-50 border border-green-200 rounded-md p-4">
              <p className="text-sm text-green-800">{successMessage}</p>
            </div>
          )}

          {apiError && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4">
              <p className="text-sm text-red-800">{apiError}</p>
            </div>
          )}

          <div className="space-y-4">
            <Input label="Username" type="text" autoComplete="username" {...register('username')} />
            {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}

            <Input
              label="Password"
              type="password"
              autoComplete="current-password"
              {...register('password')}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <Button type="submit" className="w-full">
            {isPending ? 'Logging in...' : 'Log in'}
          </Button>

          <div className="text-center">
            <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-500">
              Forgot your password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
