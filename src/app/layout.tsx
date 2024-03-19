import './globals.css';

export const metadata = {
  title: "Ayush Pai",
  description: "Ayush Pai's personal website.",
  icons: {
    icon: '/ayushpai.github.io/favicon.png', // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
