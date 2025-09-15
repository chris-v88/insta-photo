import React from 'react';

export type PageSpinnerProps = {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const PageSpinner: React.FC<PageSpinnerProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div
        className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`}
      />
    </div>
  );
};

export default PageSpinner;
