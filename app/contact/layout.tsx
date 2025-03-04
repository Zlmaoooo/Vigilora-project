import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Vigilora',
  description: 'Get in touch with our team for fraud detection solutions',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}