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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,opsz,wght@0,8..40,400;0,8..40,500;0,8..40,600;0,8..40,700;1,8..40,400;1,8..40,500;1,8..40,600;1,8..40,700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}
