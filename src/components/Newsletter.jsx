export default function Newsletter() {
  return (
    <>
      <section className="bg-gray-100 py-12 reveal-up">
        <div className="max-w-xl mx-auto text-center px-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Subscribe to our Newsletter
          </h2>
          <p className="text-gray-600 mt-2">
            Get the latest updates and news straight to your inbox.
          </p>

          <form className="mt-6 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
