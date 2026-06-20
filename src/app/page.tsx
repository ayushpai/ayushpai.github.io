import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const currentItems = [
  {
    title: "Transition",
    description: "Traveling, tinkering, moving to SF.",
  },
  {
    title: "Researcher @ EI-HCAI Lab, Georgia Tech",
    description: "Working on novel guidance techniques for generative infilling in diffusion models.",
    href: "https://eilab.gatech.edu/",
  },
];

const pastItems = [
  {
    title: "Georgia Tech",
    description: "Graduated with a bachelor's and master's in Computer Science.",
    descriptionLinkText: "Graduated",
    descriptionHref: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7459974137768390658/",
  },
  {
    title: "Second Thoughts",
    description: "A hybrid decoding pipeline using GPT-2 and MDLM that masks low-confidence autoregressive tokens and regenerates them with bidirectional diffusion context, improving on HellaSwag, WikiText-103, and MAUVE.",
  },
  {
    title: "ML Intern @ Meta",
    description: "Built a ranking model for Instagram that decides how content is ordered in production.",
  },
  {
    title: "Donna",
    description: "A local file search system that turns files into vectors, rewrites a query into related searches, and retrieves the closest matches by meaning instead of exact text, with 49% better retrieval accuracy than Spotlight (macOS Sequoia, 2024).",
    href: "https://devpost.com/software/donna-3pcgks",
  },
  {
    title: "SWE Intern @ AWS",
    description: "Built a Lambda-based validation system for AWS Organizations that cut validation runtime from 5 hours to under 2 minutes.",
  },
  {
    title: "Open Source Drawing Calculator",
    description: "An open-source version of Apple’s iOS 18 Math Notes that reads hand-drawn equations, parses them with a multimodal model, and writes the computed answers back onto the canvas.",
    href: "https://github.com/ayushpai/AI-Math-Notes",
  },
  {
    title: "Sideline",
    description: "An AI referee system for basketball that recognizes fouls from game footage; pitched to NBA executives and featured on Overtime Sports.",
    href: "https://news.gatech.edu/news/2023/07/25/tech-student-brings-artificial-intelligence-basketball-officiating",
  },
  {
    title: "Rentathon",
    description: "Built a person-to-person rental marketplace for household items.",
    href: "https://www.rentathonapp.com/",
  },
];

function ItemLine({
  item,
}: {
  item: {
    title: string;
    description: string;
    href?: string;
    descriptionLinkText?: string;
    descriptionHref?: string;
  };
}) {
  const linkedDescription =
    item.descriptionLinkText && item.descriptionHref
      ? item.description.replace(
          item.descriptionLinkText,
          `__LINK__${item.descriptionLinkText}__LINK__`,
        )
      : item.description;

  const descriptionParts = linkedDescription.split("__LINK__");

  return (
    <p>
      {item.href ? (
        <a
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="text-[rgba(58,58,58,0.82)] underline decoration-dotted underline-offset-4"
        >
          <strong>{item.title}</strong>
        </a>
      ) : (
        <strong>{item.title}</strong>
      )}{" "}
      -{" "}
      {descriptionParts.map((part, index) =>
        part === item.descriptionLinkText && item.descriptionHref ? (
          <a
            key={`${item.title}-${index}`}
            href={item.descriptionHref}
            target="_blank"
            rel="noreferrer"
            className="text-[rgba(58,58,58,0.82)] underline decoration-dotted underline-offset-4"
          >
            {part}
          </a>
        ) : (
          <span key={`${item.title}-${index}`}>{part}</span>
        ),
      )}
    </p>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex items-center justify-between gap-6">
          <h1 className="text-5xl font-semibold">Ayush Pai</h1>
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com/ayushpai0"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="text-[rgba(58,58,58,0.82)] transition-opacity hover:opacity-100"
            >
              <FaXTwitter size={18} />
            </a>
            <a
              href="https://github.com/ayushpai"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-[rgba(58,58,58,0.82)] transition-opacity hover:opacity-100"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/ayushpai/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-[rgba(58,58,58,0.82)] transition-opacity hover:opacity-100"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
        <p className="max-w-3xl text-base leading-7">
          I like to work on interesting problems in ML and systems. I just graduated from Georgia Tech and am moving to San Francisco very soon. If you&apos;re looking for roommates, reach out :)
        </p>
        <p className="mt-2 max-w-3xl text-base leading-7">
          In my free time, I like{" "}
          <a
            href="https://www.youtube.com/watch?v=r9lpSNgYBD8&feature=youtu.be"
            target="_blank"
            rel="noreferrer"
            className="text-[rgba(58,58,58,0.82)] underline decoration-dotted underline-offset-4"
          >
            photography
          </a>
          ,{" "}
          <a
            href="https://www.youtube.com/c/AyushPai"
            target="_blank"
            rel="noreferrer"
            className="text-[rgba(58,58,58,0.82)] underline decoration-dotted underline-offset-4"
          >
            tinkering
          </a>
          , and kudo-farming on{" "}
          <a
            href="https://www.strava.com/athletes/154958013"
            target="_blank"
            rel="noreferrer"
            className="text-[rgba(58,58,58,0.82)] underline decoration-dotted underline-offset-4"
          >
            Strava
          </a>
          .
        </p>
        <p className="mt-3 mb-0 max-w-3xl text-sm leading-6 opacity-70">
          ayushpai [at] gmail [dot] com
        </p>
        <hr className="mt-1 mb-6 border-0 border-t border-black/10" />
        <p className="mb-5 text-xl italic opacity-55">Current</p>
        <div className="space-y-5 text-base leading-7">
          {currentItems.map((item) => (
            <ItemLine key={item.title} item={item} />
          ))}
        </div>
        <hr className="my-6 border-0 border-t border-black/10" />
        <p className="mb-5 text-xl italic opacity-55">Past</p>
        <div className="space-y-5 text-base leading-7">
          {pastItems.map((item) => (
            <ItemLine key={item.title} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
}
