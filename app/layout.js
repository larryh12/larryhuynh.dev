import './globals.css';

export const metadata = {
  title: 'LARRY HUYNH',
  description: "Larry Huynh's Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className="m-auto max-w-screen-lg">{children}</body>
    </html>
  );
}
