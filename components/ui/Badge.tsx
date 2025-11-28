import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'eco' | 'neutral' | 'warning' | 'nacs' | 'ccs1';
  size?: 'sm' | 'md';
  className?: string;
}

export default function Badge({
  children,
  variant = 'neutral',
  size = 'md',
  className = '',
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center font-semibold rounded-full';
  
  const variants = {
    primary: 'bg-primary/10 text-primary',
    eco: 'bg-eco-green/10 text-eco-green-dark',
    neutral: 'bg-gray-bg text-slate-light',
    warning: 'bg-warning-amber/10 text-warning-amber',
    nacs: 'bg-primary/10 text-primary',
    ccs1: 'bg-slate/10 text-slate',
  };
  
  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  };
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return <span className={classes}>{children}</span>;
}
