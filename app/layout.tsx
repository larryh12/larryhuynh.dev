import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import './globals.css';

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
      lang="en"
      className={`${inter.className} snap-y snap-proximity scroll-smooth lg:snap-mandatory`}
    >
      <body className="[&>section]:snap-start">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
