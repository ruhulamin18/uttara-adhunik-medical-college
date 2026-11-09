'use client';

import type { ReactNode } from 'react';
import { signOut } from 'next-auth/react';

export default function AdminSignOutButton({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={() => signOut({ redirectTo: '/admin/login' })}
      className={className}
    >
      {children}
    </button>
  );
}
