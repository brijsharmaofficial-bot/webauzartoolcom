export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-12">
      
      {/* HERO */}
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          AI Tools for PDF, Images & Text 🚀
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Save hours with smart AI tools. Summarize PDFs, enhance images, and rewrite text instantly.
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="https://www.webauzar.in"
            className="bg-black text-white px-6 py-3 rounded-xl"
          >
            Use Free Tools
          </a>

          <button className="border px-6 py-3 rounded-xl">
            Get Early Access
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-5xl mx-auto mt-12 grid md:grid-cols-3 gap-6">
        
        <div className="p-6 border rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">
            📄 AI PDF Summarizer
          </h3>
          <p className="text-gray-600">
            Upload any PDF and get a quick summary in seconds.
          </p>
        </div>

        <div className="p-6 border rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">
            🧠 AI Text Rewriter
          </h3>
          <p className="text-gray-600">
            Rewrite content smarter, faster, and better.
          </p>
        </div>

        <div className="p-6 border rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">
            🖼️ AI Image Enhancer
          </h3>
          <p className="text-gray-600">
            Improve image quality instantly using AI.
          </p>
        </div>

      </section>

      {/* FOOTER CTA */}
      <section className="text-center mt-12">
        <p className="text-gray-600 mb-4">
          Need tools right now?
        </p>
        <a
          href="https://www.webauzar.in"
          className="underline font-medium"
        >
          Use Free Tools on webauzar.in →
        </a>
      </section>

    </main>
  );
}