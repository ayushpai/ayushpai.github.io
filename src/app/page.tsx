import Head from "next/head";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const experiences = [
  {
    period: "Summer 2025",
    description: (
      <>
        Incoming Software Engineer Intern at{" "}
        <span className="font-bold text-blue-400">Meta.</span> I will be working on machine learning for ads ranking at <span className="font-bold text-blue-400">Instagram</span>. HMU if you&apos;re in the bay this summer!
      </>
    ),
  },
  {
    period: "May 2024 - August 2024",
    description: (
      <>
        Worked at{" "}
        <span className="font-bold text-blue-400">Amazon</span> as a Software Engineer Intern on the AWS Organizations team. Implemented an AWS Lambda auditor for AWS Organizations Policies within a CI/CD pipeline, reducing DynamoDB scan time from 5 hours to 2 minutes on 400 GB of data.
      </>
    ),
  },
  {
    period: "August 2023 - April 2024",
    description: (
      <>
        Worked at{" "}
        <span className="font-bold text-blue-400">SingleStore</span> as a DevRel Engineer. Delivered 15 technical presentations showcasing integrations with LLMs, RAG, Vector Databases, and CV pipelines with 350+ attendees per session.
      </>
    ),
  },
  {
    period: "June 2023 - May 2024",
    description: (
      <>
        Developed a computer vision-based Basketball Refereeing Assistant using pose estimation and a Two-Stream CNN-TSM architecture trained on 40K{" "}
        NBA clips. Expanded to AI-driven sports recruiting with natural language search, pitching to{" "}
        <span className="font-bold text-blue-400">NBA</span> leadership and{" "}
        <span className="font-bold text-blue-400">NCAA</span> coaches.
      </>
    ),
  },
  {
    period: "May 2022 - August 2022",
    description: (
      <>
        Worked at{" "}
        <span className="font-bold text-blue-400">PikMyKid</span> as a Software Engineer Intern. Improved user engagement with gamification features.
      </>
    ),
  },
  {
    period: "2018 - 2022",
    description: (
      <>
        Built 15 consumer-facing mobile apps with 200K+ downloads and 30K monthly active users.
      </>
    ),
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-16 px-4">
      <Head>
        <title>Ayush Pai - Home</title>
        <meta name="description" content="Ayush Pai's personal website" />
      </Head>
      <div className="text-left max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-100">
          Ayush Pai
        </h1>

        {/* Description */}
        <div className="text-left mb-10">
          <p className="text-md text-gray-300">
            I&#39;m a 3rd-year Computer Science student @ Georgia Tech specializing in AI/ML and Networking. Passionate about building consumer-facing products that leverage amazing technology to solve real-world problems.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-start gap-4 mb-10">
          <a
            href="mailto:ayushpai@gatech.edu"
            aria-label="Email"
            className="text-gray-400 hover:text-gray-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ayushpai/"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-gray-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/ayushpai"
            aria-label="GitHub"
            className="text-gray-400 hover:text-gray-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://twitter.com/ayushpai0"
            aria-label="Twitter"
            className="text-gray-400 hover:text-gray-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={24} />
          </a>
        </div>

        {/* Experience Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row text-gray-300"
              >
                <div className="md:w-1/3 text-gray-400 font-medium">
                  {exp.period}
                </div>
                <div className="md:w-2/3 mt-2 md:mt-0 md:pl-4">
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
