import React, { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
};

export const Card: React.FC<CardProps> = ({ children }) => (
  <div className="bg-white shadow rounded-lg p-4">{children}</div>
);

export const CardContent: React.FC<CardProps> = ({ children }) => (
  <div className="space-y-4">{children}</div>
);
