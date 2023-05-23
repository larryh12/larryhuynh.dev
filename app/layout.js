import './globals.css';

export const metadata = {
  title: 'larryhuynh.dev',
  description: "Larry Huynh's Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="m-auto max-w-screen-lg">{children}</body>
    </html>
  );
}
