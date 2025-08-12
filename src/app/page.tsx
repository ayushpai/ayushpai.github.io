import Head from "next/head";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4">
      <Head>
        <title>Ayush Pai - Home</title>
        <meta name="description" content="Ayush Pai's personal website" />
      </Head>
      <div className="text-left max-w-2xl mx-auto">
        {/* Greeting */}
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-6 text-black dark:text-white">
          Hi! I&apos;m Ayush Pai.
        </h1>

        {/* Links */}
        <div className="flex justify-between gap-8 mb-8">
          <a
            href="https://github.com/ayushpai"
            className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ayushpai/"
            className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/ayushpai0"
            className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.youtube.com/c/AyushPai"
            className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube size={24} />
          </a>
          <a
            href="https://www.instagram.com/ayushspai/?hl=en"
            className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Introduction Paragraphs */}
        <div className="space-y-4 mb-6 text-black dark:text-white">
          <p>
            I am a final year student at the Georgia Institute of Technology studying Computer Science.
          </p>
          <p>
            I&apos;ve previously done engineering at{" "}
            <a
              href="https://engineering.fb.com/2023/08/09/ml-applications/scaling-instagram-explore-recommendations-system/"
              className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Meta
            </a>
            ,{" "}
            <a
              href="https://aws.amazon.com/organizations/"
              className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Amazon
            </a>
            , and{" "}
            <a
              href="https://events.singlestore.com/webinar-building-applications-with-vector-databases"
              className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              SingleStore
            </a>
            .
          </p>
          <p>
            I like solving challenging problems and building cool{" "}
            <a
              href="/stuff"
              className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
            >
              stuff
            </a>.
          </p>
        </div>

        {/* Separator Line */}
        <hr className="border-gray-300 dark:border-gray-600 mb-6" />

        {/* Contact Information */}
        <div className="mb-4">
          <p className="text-black dark:text-white">
            Reach out to me at{" "}
            <a 
              href="mailto:ayushpai@gatech.edu" 
              className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
            >
              ayushpai@gatech.edu
            </a>{" "}
            if you want to chat!
          </p>
        </div>
      </div>
    </main>
  );
}
