const sections = [
  { id: "embedding", title: "nn.Embedding" },
  { id: "view", title: "tensor.view" },
  { id: "broadcasting", title: "Broadcasting with attention" },
];

export default function Pytorch() {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="relative mx-auto max-w-4xl">
        <div className="mb-6 space-y-3 lg:hidden">
          <p className="text-sm italic opacity-55">Sections</p>
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm leading-6">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-[rgba(58,58,58,0.82)] underline decoration-dotted underline-offset-4"
              >
                {section.title}
              </a>
            ))}
          </nav>
        </div>
        <aside className="absolute right-full mr-10 hidden w-52 lg:block">
          <div className="sticky top-12 space-y-3">
            <p className="text-sm italic opacity-55">Sections</p>
            <nav className="space-y-3 text-sm leading-6">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block text-[rgba(58,58,58,0.82)] underline decoration-dotted underline-offset-4"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>
        <h1 className="mb-4 text-5xl font-semibold">PyTorch</h1>
        <p className="max-w-3xl text-base leading-7">
          Interesting findings while exploring PyTorch.
        </p>
        <hr className="my-6 border-0 border-t border-black/10" />
        <div className="space-y-8">
          <section id="embedding" className="scroll-mt-10 space-y-4 rounded-sm border border-black/10 bg-[#faf7f4] px-5 py-5">
            <p className="text-lg leading-7">
              <strong>nn.Embedding</strong>
            </p>
            <p className="text-base leading-7">
              When you write <code>nn.Embedding(1000, 128)</code>, you are creating a table with
              1000 rows and 128 columns: one 128-dimensional embedding for each
              token in a vocabulary of size 1000.
            </p>
            <p className="text-base leading-7">
              Calling the module is basically a lookup into that table. If your
              input tokens are <code>[2, 7, 4]</code>, PyTorch grabs rows 2, 7,
              and 4 from the embedding matrix and returns them stacked together.
            </p>
            <pre className="overflow-x-auto whitespace-pre-wrap rounded-sm border border-black/10 bg-[#F5F2F0] px-4 py-3 text-sm leading-6">
              <code>{`import torch
import torch.nn as nn

embedding = nn.Embedding(1000, 128)

tokens = torch.tensor([2, 7, 4])
out = embedding(tokens)

print(out.shape)
# torch.Size([3, 128])`}</code>
            </pre>
            <p className="text-base leading-7">
              You can think of it as something close to manually indexing the
              weight matrix and stacking the results.
            </p>
            <pre className="overflow-x-auto whitespace-pre-wrap rounded-sm border border-black/10 bg-[#F5F2F0] px-4 py-3 text-sm leading-6">
              <code>{`row_2 = embedding.weight[2]
row_7 = embedding.weight[7]
row_4 = embedding.weight[4]

manual = torch.stack([row_2, row_7, row_4])

print(row_2.shape)
# torch.Size([128])

print(manual.shape)
# torch.Size([3, 128])`}</code>
            </pre>
            <p className="text-base leading-7">
              So the mental model is: <code>nn.Embedding</code> is a learnable
              lookup table, and calling it with token ids returns the
              corresponding rows packed into one tensor.
            </p>
          </section>
          <section id="view" className="scroll-mt-10 space-y-4 rounded-sm border border-black/10 bg-[#faf7f4] px-5 py-5">
            <p className="text-lg leading-7">
              <strong>tensor.view</strong>
            </p>
            <p className="text-base leading-7">
              <code>view</code> feels a lot like{" "}
              <code>reshape</code>, but the important difference is that{" "}
              <code>view</code> works by reinterpreting the same contiguous block
              of memory instead of making a new tensor when it can avoid it.
            </p>
            <p className="text-base leading-7">
              If a tensor is already stored contiguously, <code>view</code> can
              change only the shape metadata and leave the underlying values
              exactly where they are in memory.
            </p>
            <pre className="overflow-x-auto whitespace-pre-wrap rounded-sm border border-black/10 bg-[#F5F2F0] px-4 py-3 text-sm leading-6">
              <code>{`import torch

x = torch.arange(12)
print(x)
# tensor([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])

y = x.view(3, 4)
print(y)
# tensor([
#   [0, 1, 2, 3],
#   [4, 5, 6, 7],
#   [8, 9, 10, 11],
# ])`}</code>
            </pre>
            <p className="text-base leading-7">
              Conceptually, nothing was rearranged. PyTorch just changed how it
              reads the same flat memory:
            </p>
            <pre className="overflow-x-auto whitespace-pre-wrap rounded-sm border border-black/10 bg-[#F5F2F0] px-4 py-3 text-sm leading-6">
              <code>{`flat memory:
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

viewed as (3, 4):
[
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
]`}</code>
            </pre>
            <p className="text-base leading-7">
              That is the efficiency trick: <code>view</code> is just a new
              interpretation of the same contiguous memory, not a rebuild of the
              tensor.
            </p>
            <p className="text-base leading-7">
              <code>reshape</code> will try to do the same thing, but if the
              tensor is no longer contiguous it is allowed to make a copy in
              order to return the requested shape.
            </p>
            <pre className="overflow-x-auto whitespace-pre-wrap rounded-sm border border-black/10 bg-[#F5F2F0] px-4 py-3 text-sm leading-6">
              <code>{`x = torch.arange(12).view(3, 4)
z = x.t()  # transpose makes layout non-contiguous

print(z.is_contiguous())
# False

# z.view(2, 6) would fail here

r = z.reshape(2, 6)
print(r.shape)
# torch.Size([2, 6])`}</code>
            </pre>
            <p className="text-base leading-7">
              In that case, <code>reshape</code> succeeds by materializing data
              in a new layout, while <code>view</code> refuses because the old
              memory layout cannot be reinterpreted that way directly.
            </p>
            <p className="text-base leading-7">
              So the rough mental model is: use <code>view</code> when you want
              a cheap reshaping of contiguous memory, and remember that{" "}
              <code>reshape</code> may silently fall back to copying data when
              the layout no longer fits.
            </p>
          </section>
          <section id="broadcasting" className="scroll-mt-10 space-y-4 rounded-sm border border-black/10 bg-[#faf7f4] px-5 py-5">
            <p className="text-lg leading-7">
              <strong>Broadcasting: a visualized example with attention</strong>
            </p>
            <p className="text-base leading-7">
              Broadcasting shows up in all of the Q, K, and V projections in
              attention, but it is easiest to see through the query projection
              as one concrete example. If your input has shape{" "}
              <code>(batch_size, context_length, embedding_dim)</code> and your
              linear layer maps <code>embedding_dim -&gt; head_dim</code>, then
              conceptually you are multiplying each token vector by a weight
              matrix of shape <code>(embedding_dim, head_dim)</code>.
            </p>
            <p className="text-base leading-7">
              The interesting part is that one object is 3D and the other is
              2D, but PyTorch still knows how to do the multiplication. It
              treats the last dimension of the input as the feature dimension
              and applies the same projection independently across every batch
              and time position.
            </p>
            <pre className="overflow-x-auto whitespace-pre-wrap rounded-sm border border-black/10 bg-[#F5F2F0] px-4 py-3 text-sm leading-6">
              <code>{`import torch
import torch.nn as nn

batch_size = 2
context_length = 4
embedding_dim = 8
head_dim = 3

x = torch.randn(batch_size, context_length, embedding_dim)
W_q = torch.randn(embedding_dim, head_dim)

q = x @ W_q

print(x.shape)
# torch.Size([2, 4, 8])

print(W_q.shape)
# torch.Size([8, 3])

print(q.shape)
# torch.Size([2, 4, 3])`}</code>
            </pre>
            <p className="text-base leading-7">
              You can read that as: for each one of the{" "}
              <code>batch_size * context_length</code> token vectors, multiply a
              length-<code>embedding_dim</code> vector by the same query matrix
              and produce a length-<code>head_dim</code> output vector.
            </p>
            <p className="text-base leading-7">
              Each token vector of length <code>embedding_dim</code> gets
              multiplied by the same query matrix and becomes a vector of length{" "}
              <code>head_dim</code>. PyTorch just does all of those projections
              in one batched operation.
            </p>
            <pre className="overflow-x-auto whitespace-pre-wrap rounded-sm border border-black/10 bg-[#F5F2F0] px-4 py-3 text-sm leading-6">
              <code>{`x[0, 0] @ W_q  # one token -> shape [head_dim]
x[0, 1] @ W_q  # next token -> shape [head_dim]
x[1, 3] @ W_q  # another token -> shape [head_dim]

# PyTorch batches all of these together:
q = x @ W_q`}</code>
            </pre>
            <p className="text-base leading-7">
              So the broadcasting intuition is not that PyTorch literally copies
              the weight matrix across the batch and sequence dimensions.
              Instead, it reuses the same 2D weight matrix across all those
              positions and performs the batched matmul as if that projection
              were being applied over and over to each token.
            </p>
            <p className="text-base leading-7">
              This is exactly the kind of thing that happens inside{" "}
              <code>torch.nn.Linear</code>. The conceptual math is input times a
              matrix of shape <code>(embedding_dim, head_dim)</code>, but
              PyTorch stores the linear layer weight internally as{" "}
              <code>(head_dim, embedding_dim)</code>. That transposed storage is
              convenient because it reduces extra work in the backward pass and
              fits the way the internal matrix multiplies are implemented.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
