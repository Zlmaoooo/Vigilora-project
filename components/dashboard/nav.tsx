"use client";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Shield,
  Bell,
  Settings,
  FileText,
  MessageSquare,
  LogOut,
  AlertTriangle,
  LineChart
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Fraud Detection', href: '/dashboard/detection', icon: Shield },
  { name: 'Alerts', href: '/dashboard/alerts', icon: Bell },
  { name: 'Reports', href: '/dashboard/reports', icon: FileText },
  { name: 'Analytics', href: '/dashboard/analytics', icon: LineChart },
  { name: 'Support', href: '/dashboard/support', icon: MessageSquare },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export default function DashboardNav() {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      router.push('/');
      router.refresh();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="w-64 min-h-screen bg-gradient-to-b from-gray-50 to-white border-r">
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-8 hover-lift">
          <Shield className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gradient-animate">
            Vigilora
          </span>
        </div>

        <div className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                  isActive
                    ? "bg-blue-50 text-blue-600 shadow-sm"
                    : "text-gray-700 hover:bg-gray-50 hover:text-blue-600 hover:translate-x-1"
                )}
              >
                <item.icon className={cn(
                  "h-5 w-5 transition-colors",
                  isActive ? "text-blue-600" : "text-gray-400 group-hover:text-blue-600"
                )} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="p-4 mt-8">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2 text-blue-600 mb-2">
            <AlertTriangle className="h-5 w-5" />
            <span className="font-medium">Security Status</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-green-500 rounded-full" style={{ width: '85%' }}></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">Your security score: 85/100</p>
        </div>
      </div>

      <div className="absolute bottom-4 w-64 px-4">
        <button
          onClick={handleSignOut}
          className="flex items-center space-x-3 px-3 py-2 w-full rounded-lg text-sm font-medium text-red-600 
            hover:bg-red-50 transition-all duration-300 hover:translate-x-1"
        >
          <LogOut className="h-5 w-5" />
          <span>Sign Out</span>
        </button>
      </div>
    </nav>
  );
}