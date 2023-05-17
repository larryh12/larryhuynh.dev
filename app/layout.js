import './globals.css';
import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'LARRY HUYNH',
  description: "Larry Huynh's Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html class="scroll-smooth" lang="en">
      <body className="flex justify-center bg-rp-base text-rp-text">
        <main className={`${inter.className} max-w-screen-lg p-8`}>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
