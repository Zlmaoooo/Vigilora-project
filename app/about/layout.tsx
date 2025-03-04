import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Vigilora',
  description: 'Learn about Vigilora\'s mission to protect businesses from fraud',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}