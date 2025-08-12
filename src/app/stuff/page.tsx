import Head from "next/head";

export default function Stuff() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-20 px-4">
      <Head>
        <title>Stuff - Ayush Pai</title>
        <meta name="description" content="Projects and stuff by Ayush Pai" />
      </Head>
      <div className="text-left max-w-2xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-6 text-black">
          Stuff
        </h1>

        {/* Content */}
        <div className="space-y-8 mb-8 text-black">
          {/* AI Basketball Referee */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              <a
                href="https://github.com/ayushpai/AI-Basketball-Referee"
                className="text-blue-600 underline hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                AI Basketball Referee
              </a>
            </h2>
            <p className="text-gray-700">
              Computer vision-based system that uses YOLO models to detect basketball violations like travels and double dribbles in real-time. 
              Trained on 3000+ annotated images and featured in Georgia Tech news, Overtime (7M+ followers), and various tech publications.
            </p>
          </div>

          {/* AI Math Notes */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              <a
                href="https://github.com/ayushpai/AI-Math-Notes"
                className="text-blue-600 underline hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                AI Math Notes
              </a>
            </h2>
            <p className="text-gray-700">
              Open-source AI-powered math note-taking app that can solve handwritten equations in real-time. 
              Draw equations on a canvas and get instant results using computer vision and AI.
            </p>
          </div>

          {/* ReelDish */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              <a
                href="https://apps.apple.com/us/app/reeldish-import-all-recipes/id6743655758"
                className="text-blue-600 underline hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                ReelDish
              </a>
            </h2>
            <p className="text-gray-700">
              iOS app that helps users import and organize recipes from various sources. 
              Available on the App Store with a focus on making recipe management seamless.
            </p>
          </div>

          {/* PathVoice */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              <a
                href="https://github.com/ayushpai/pathvoice"
                className="text-blue-600 underline hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                PathVoice
              </a>
            </h2>
            <p className="text-gray-700">
              Voice-based navigation system that provides audio directions and guidance. 
              Built at UC Berkeley AI Hackathon and designed to help users navigate through various environments using voice commands.
            </p>
          </div>

          {/* YouTube Channel */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              <a
                href="https://www.youtube.com/c/AyushPai"
                className="text-blue-600 underline hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube Channel
              </a>
            </h2>
            <p className="text-gray-700">
              Where I build cool things and show how I made them. Sharing the process behind my projects and the technology that powers them.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
