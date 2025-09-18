import Head from "next/head";

export default function Notes() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-4 pt-20">
      <Head>
        <title>Notes - Ayush Pai</title>
        <meta name="description" content="Study notes and documentation by Ayush Pai" />
      </Head>
      <div className="text-left max-w-2xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-6 text-black dark:text-white">
          Notes
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
          {/* Networking */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              <a
                href="/notes/networking"
                className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
              >
                Networking
              </a>
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Comprehensive notes on computer networking concepts, protocols, and architectures. 
              Covers topics from the OSI model to advanced networking technologies.
            </p>
          </div>

          {/* Placeholder for future notes */}
          <div className="text-gray-500 dark:text-gray-400 italic">
            More notes coming soon...
          </div>
        </div>
      </div>
    </main>
  );
}
