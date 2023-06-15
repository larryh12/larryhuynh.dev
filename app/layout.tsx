import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import './globals.css';
import { Providers } from './providers';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'larryhuynh.dev',
  description: "Larry Huynh's Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${inter.className} scroll-smooth lg:snap-y lg:snap-mandatory`}
    >
      <body className="[&>section]:snap-start">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
