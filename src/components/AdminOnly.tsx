'use client';

import { useUser } from '@clerk/nextjs';
import { ReactNode } from 'react';

interface AdminOnlyProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export default function AdminOnly({ children, fallback }: AdminOnlyProps) {
  const { user } = useUser();

  // Check if user has ADMIN role in public metadata
  const isAdmin = user?.publicMetadata?.role === 'ADMIN';

  if (!isAdmin) {
    return fallback || null;
  }

  return <>{children}</>;
}
