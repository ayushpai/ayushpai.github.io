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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Force light mode by removing any dark class and preventing it from being added
              document.documentElement.classList.remove('dark');
              // Override any media query detection
              if (typeof window !== 'undefined') {
                const observer = new MutationObserver(() => {
                  document.documentElement.classList.remove('dark');
                });
                observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
              }
            `,
          }}
        />
      </head>
      <body className="bg-white dark:bg-gray-900 text-black dark:text-white">{children}</body>
    </html>
  );
}
