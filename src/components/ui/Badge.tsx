import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'indigo' | 'success' | 'default';
}

const variants = {
  indigo: 'bg-indigo-50 text-indigo-600',
  success: 'bg-emerald-50 text-emerald-600',
  default: 'bg-gray-100 text-gray-800',
};

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default' }) => {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium
      ${variants[variant]}`}
    >
      {children}
    </span>
  );
};
