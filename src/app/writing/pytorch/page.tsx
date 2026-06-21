export default function Pytorch() {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-5xl font-semibold">PyTorch</h1>
        <p className="max-w-3xl text-base leading-7">
          Interesting findings while exploring PyTorch.
        </p>
        <hr className="my-6 border-0 border-t border-black/10" />
        <div className="space-y-8">
          <section className="space-y-4 rounded-sm border border-black/10 bg-[#faf7f4] px-5 py-5">
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
          <section className="space-y-4 rounded-sm border border-black/10 bg-[#faf7f4] px-5 py-5">
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
        </div>
      </div>
    </main>
  );
}
