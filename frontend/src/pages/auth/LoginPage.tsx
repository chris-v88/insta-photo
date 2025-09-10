import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { LoginFormData, loginSchema } from '../../schemas/form-login.schema';

const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="text-center text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            InstaPhoto
          </h1>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            or{' '}
            <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
              Sign up for an account
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <Input label="Username" type="text" autoComplete="username" {...register('username')} />

            <Input
              label="Password"
              type="password"
              autoComplete="current-password"
              {...register('password')}
            />
          </div>

          <Button type="submit" className="w-full">
            Login in
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
