import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="text-center text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            InstaPhoto
          </h1>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            or{' '}
            <Link
              to="/register"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign up for an account
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <Input label="Email address" type="email" autoComplete="email" />

            <Input
              label="Password"
              type="password"
              autoComplete="current-password"
            />
          </div>

          <Button type="submit" className="w-full">
            Sign in
          </Button>

          <div className="text-center">
            <Link
              to="/forgot-password"
              className="text-sm text-blue-600 hover:text-blue-500"
            >
              Forgot your password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
