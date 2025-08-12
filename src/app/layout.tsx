import './globals.css';

export const metadata = {
  title: "Ayush Pai",
  description: "Final year Computer Science student at Georgia Tech. Previously engineering at Meta, Amazon, and SingleStore. Love solving challenging problems.",
  icons: {
    icon: 'pfp.jpg', // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-black dark:text-white">{children}</body>
    </html>
  );
}
