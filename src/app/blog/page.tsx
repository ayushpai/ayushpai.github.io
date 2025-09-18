import Head from "next/head";

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-4 pt-20">
      <Head>
        <title>Blog - Ayush Pai</title>
        <meta name="description" content="Blog posts and thoughts by Ayush Pai" />
      </Head>
      <div className="text-left max-w-2xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-6 text-black dark:text-white">
          Blog
        </h1>

        {/* Back Link */}
        <div className="mb-8">
          <a
            href="/"
            className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
          >
            ← Back to home
          </a>
        </div>

        {/* Content */}
        <div className="space-y-8 mb-8 text-black dark:text-white">
          <div className="text-gray-500 dark:text-gray-400 italic">
            Blog posts coming soon...
          </div>
        </div>
      </div>
    </main>
  );
}
