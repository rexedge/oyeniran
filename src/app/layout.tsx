import { ModeToggle } from '@/components/mode-toggle';
import { ThemeProvider } from '@/components/theme-provider';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Toaster } from 'sonner';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Your Name - Personal Website',
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
          <div className="min-h-screen bg-background text-foreground flex flex-col">
            <header className="container mx-auto px-4 py-8">
              <nav className="flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                  Your Name
                </Link>
                <div className="space-x-4">
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                  <Link href="/projects" className="hover:underline">
                    Projects
                  </Link>
                  <Link href="/about" className="hover:underline">
                    About
                  </Link>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                  <Link href="/blog" className="hover:underline">
                    Blog
                  </Link>
                  <ModeToggle />
                </div>
              </nav>
            </header>
            <main className="flex-grow">{children}</main>
            <footer className="bg-muted py-8">
              <div className="container mx-auto px-4 text-center">
                <p>
                  &copy; {new Date().getFullYear()} Your Name. All rights
                  reserved.
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
