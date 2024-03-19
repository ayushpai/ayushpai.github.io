import './globals.css';

export const metadata = {
  title: "Ayush Pai",
  description: "Hi, I'm Ayush Pai. I am currently 2nd-year Computer Science student at Georgia Tech. Incoming SDE Intern at Amazon.",
  icons: {
    icon: 'favicon.png', // /public path
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
