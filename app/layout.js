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
    <html className="scroll-smooth" lang="en">
      <body className="mocha flex justify-center bg-base text-text transition-colors">
        <main className={`${inter.className} max-w-screen-lg p-8`}>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
