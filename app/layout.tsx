import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { profile } from '@/lib/data';

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description:
    'Portfolio of Beermohamed K, Frontend Engineer specializing in React.js, Next.js and TypeScript.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
