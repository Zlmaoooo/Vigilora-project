import { redirect } from 'next/navigation';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import DashboardNav from '@/components/dashboard/nav';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard - Vigilora',
  description: 'Manage your fraud detection and security settings',
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Wrap in try/catch to handle potential Supabase connection issues
  try {
    const supabase = createServerComponentClient({ cookies });
    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
      redirect('/auth/signin');
    }

    return (
      <div className="flex min-h-screen">
        <DashboardNav />
        <main className="flex-1 p-8">{children}</main>
      </div>
    );
  } catch (error) {
    // If there's an error with Supabase connection, redirect to sign in
    console.error("Supabase connection error:", error);
    redirect('/auth/signin');
  }
}