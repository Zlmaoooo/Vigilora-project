import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Tools - Vigilora',
  description: 'Explore our AI-powered fraud detection tools',
};

export default function AIToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}