import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/ui/Icon';
import Button from '../components/ui/Button';

export type ErrorPageProps = {
  error?: Error | string;
  onRetry?: () => void;
  showHomeButton?: boolean;
};

const ErrorPage = (props: ErrorPageProps) => {
  const { error, onRetry, showHomeButton = true } = props;
  const errorMessage = typeof error === 'string' ? error : error?.message || 'Something went wrong';

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <Icon name="AlertCircle" size={64} color="#ef4444" className="mx-auto" />
          <h1 className="mt-6 text-3xl font-extrabold text-gray-900">Oops! Something went wrong</h1>
          <p className="text-gray-600 text-center mb-6">
            We&apos;re sorry, but something unexpected happened. Please try again.
          </p>
          {errorMessage && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-800">{errorMessage}</p>
            </div>
          )}
        </div>

        <div className="space-y-4">
          {onRetry && (
            <Button onClick={onRetry} className="w-full flex items-center justify-center space-x-2">
              <Icon name="RefreshCw" size={20} />
              <span>Try Again</span>
            </Button>
          )}

          {showHomeButton && (
            <Link to="/">
              <Button
                variant="outline"
                className="w-full flex items-center justify-center space-x-2"
              >
                <Icon name="Home" size={20} />
                <span>Go Home</span>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
