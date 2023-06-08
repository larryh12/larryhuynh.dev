import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import './globals.css';

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
    <html lang="en">
      <body className="m-auto max-w-screen-lg">
        <div className="drawer drawer-end">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <Navbar />
            {children}
          </div>
          <div className="drawer-side lg:hidden">
            <Sidebar />
          </div>
        </div>
      </body>
    </html>
  );
}
