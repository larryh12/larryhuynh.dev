import './globals.css';
import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'LARRY HUYNH',
  description:
    "Larry Huynh's Personal Website | Get in touch: larry.huynh.dev@outlook.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex items-center justify-center bg-rp-base text-rp-text`}
      >
        <div className="w-full max-w-screen-lg p-8">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
