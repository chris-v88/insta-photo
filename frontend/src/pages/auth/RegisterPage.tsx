import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';

import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { registerSchema, RegisterFormData } from '../../schemas/form';
import { postRegisterUser } from '../../apis/register.api';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [apiError, setApiError] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
  });

  const registerMutation = useMutation({
    mutationFn: postRegisterUser,
    onSuccess: () => {
      navigate('/login', {
        state: { message: 'Registration successful! Please log in with your credentials.' },
      });
    },
    onError: (error: Error) => {
      setApiError(error.message);
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    setApiError('');
    registerMutation.mutate({
      full_name: data.name,
      username: data.username,
      email: data.email,
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
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
              sign in to your existing account
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {apiError && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4">
              <p className="text-sm text-red-800">{apiError}</p>
            </div>
          )}

          <div className="space-y-4">
            <Input label="Full Name" type="text" autoComplete="name" {...register('name')} />
            {errors.name?.message && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}

            <Input label="Username" type="text" autoComplete="username" {...register('username')} />
            {errors.username?.message && (
              <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
            )}

            <Input label="Email address" type="email" autoComplete="email" {...register('email')} />
            {errors.email?.message && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}

            <Input
              label="Password"
              type="password"
              autoComplete="new-password"
              {...register('password')}
            />
            {errors.password?.message && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}

            <Input
              label="Confirm Password"
              type="password"
              autoComplete="new-password"
              {...register('confirmPassword')}
            />
            {errors.confirmPassword?.message && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={registerMutation.isPending}>
            {registerMutation.isPending ? 'Creating account...' : 'Create account'}
          </Button>

          <div className="text-center text-sm text-gray-500">
            By creating an account, you agree to our{' '}
            <Link to="/terms" className="text-blue-600 hover:text-blue-500">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="text-blue-600 hover:text-blue-500">
              Privacy Policy
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
