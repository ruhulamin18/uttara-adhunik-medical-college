import type { ReactNode } from 'react';
import { Suspense } from 'react';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#E6F4EB]" />}>
      <ProtectedAdminContent>{children}</ProtectedAdminContent>
    </Suspense>
  );
}

async function ProtectedAdminContent({ children }: { children: ReactNode }) {
  const session = await auth();

  if (!session?.user) {
    redirect('/admin/login');
  }

  return children;
}
