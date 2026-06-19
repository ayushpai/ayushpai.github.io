import './globals.css';

export const metadata = {
  title: "Ayush Pai",
  description: "I like to work on interesting problems in ML and systems. I just graduated from Georgia Tech and am moving to San Francisco very soon. If you're looking for roommates, reach out :)",
  icons: {
    icon: 'ap404.png',
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
