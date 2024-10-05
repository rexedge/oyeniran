import { Navbar } from '@/components/Navbar';
import RandomPageTransition from '@/components/RandomPageTransition';
import { ThemeProvider } from '@/components/theme-provider';
import { siteConfig } from '@/lib/constants';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: `${siteConfig.name} - Personal Website`,
  description: 'Full-stack Software Engineer portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <RandomPageTransition>
            <main className="pt-16">{children}</main>
          </RandomPageTransition>
        </ThemeProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
