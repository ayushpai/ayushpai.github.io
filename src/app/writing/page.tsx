const writingItems = [
  {
    title: "PyTorch",
    description: "Interesting findings while exploring PyTorch.",
    href: "/writing/pytorch",
  },
];

export default function Writing() {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-5xl font-semibold">Writing</h1>
        <p className="max-w-3xl text-base leading-7">
          A collection of my writing, notes, and things I&apos;ve found interesting enough to write down.
        </p>
        <hr className="my-6 border-0 border-t border-black/10" />
        <div className="space-y-5 text-base leading-7">
          {writingItems.map((item) => (
            <p key={item.title}>
              <a
                href={item.href}
                className="text-[rgba(58,58,58,0.82)] underline decoration-dotted underline-offset-4"
              >
                <strong>{item.title}</strong>
              </a>{" "}
              - {item.description}
            </p>
          ))}
        </div>
      </div>
    </main>
  );
}
