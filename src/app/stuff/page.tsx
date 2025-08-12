import Head from "next/head";

export default function Stuff() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4">
      <Head>
        <title>Stuff - Ayush Pai</title>
        <meta name="description" content="Stuff by Ayush Pai" />
      </Head>
      <div className="text-left max-w-2xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-6 text-black">
          Stuff
        </h1>

        {/* Content */}
        <div className="space-y-4 mb-8 text-black">
          <p>
            This is where I&apos;ll share interesting stuff, projects, and thoughts.
          </p>
          <p>
            Coming soon...
          </p>
        </div>

        {/* Back Link */}
        <div className="mb-8">
          <a
            href="/"
            className="text-blue-600 underline hover:text-blue-800"
          >
            ← Back to home
          </a>
        </div>
      </div>
    </main>
  );
}
