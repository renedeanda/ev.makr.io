import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'hover' | 'bordered';
  className?: string;
  onClick?: () => void;
}

export default function Card({
  children,
  variant = 'default',
  className = '',
  onClick,
}: CardProps) {
  const baseStyles = 'bg-white rounded-card transition-all duration-200';
  
  const variants = {
    default: 'shadow-card',
    hover: 'shadow-card hover:shadow-card-hover cursor-pointer',
    bordered: 'border border-gray-border hover:border-primary/30',
  };
  
  const classes = `${baseStyles} ${variants[variant]} ${className}`;
  
  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
}
