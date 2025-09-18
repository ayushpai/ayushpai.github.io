import Head from "next/head";

export default function NetworkingNotes() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-4 pt-20">
      <Head>
        <title>Networking Notes - Ayush Pai</title>
        <meta name="description" content="Computer Networking Notes by Ayush Pai" />
      </Head>
      <div className="text-left max-w-6xl mx-auto w-full">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-6 text-black dark:text-white">
          Networking Notes
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

        {/* Embedded Notion Document */}
        <div className="w-full mb-8">
          <iframe 
            src="https://polyester-hygienic-966.notion.site/ebd/1741bda0baf4804faafcd38d1d23f25f" 
            width="100%" 
            height="600" 
            frameBorder="0" 
            allowFullScreen
            className="border border-gray-300 dark:border-gray-600 rounded-lg"
          />
        </div>
      </div>
    </main>
  );
}
