import Head from "next/head";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold mb-8">Ayush Pai</h1>

        <div className="text-justify-center mx-auto max-w-2xl mb-10">
          <p className="text-md">Hi! I am a 2nd-year Computer Science student @ Georgia Tech concentrating in AI and Computer Architecture. My research interest lies in exploring the intersection of language and pixels to build scalable world models.</p>
        </div>

        <div className="flex justify-center gap-4 mb-20">
          <a href="mailto:ayushpai@gatech.edu" aria-label="Email" className="text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={24} />
          </a>
          <a href="https://www.linkedin.com/in/ayushpai/" aria-label="LinkedIn" className="text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/ayushpai" aria-label="GitHub" className="text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://twitter.com/ayushspai" aria-label="Twitter" className="text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </a>
        </div>

        {/* Work Experience Section */}
        <div className="w-full text-center relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-gray-300 to-transparent" style={{height: '150%'}}></div>
          <div className="flex flex-col items-center space-y-4">
            {/* Experience Entry */}
            <div className="flex justify-center items-center w-full max-w-md">
              <div className="flex items-center w-full">
                <div className="flex-1 text-right pr-8">
                  <span className="text-sm font-black whitespace-nowrap">2024</span>
                </div>
                <div className="flex-1 text-left pl-8">
                  <p className="whitespace-nowrap">SDE Intern @ Amazon</p>
                  <p className="whitespace-nowrap">DevRel @ SingleStore</p>
                </div>
              </div>
            </div>
            
            {/* Experience Entry */}
            <div className="flex justify-center items-center w-full max-w-md">
              <div className="flex items-center w-full">
                <div className="flex-1 text-right pr-8">
                  <span className="text-sm font-black whitespace-nowrap">2022</span>
                </div>
                <div className="flex-1 text-left pl-8">
                  <p className="whitespace-nowrap">SWE Intern @ PikMyKid</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
