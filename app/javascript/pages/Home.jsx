import { usePage } from "@inertiajs/react";

const Home = () => {
  const { user } = usePage().props;

  return (
    <>
      {console.log(user)}
      <div className="mx-auto max-w-4xl p-6 text-white" >
        <section className="text-center py-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to R and R Chat</h1>
          <p className="text-lg text-gray-600 mb-8">
            Your Rails app is up and running. Customize this page at
            <code className="px-1 py-0.5 bg-gray-100 rounded">app/views/home/index.html.erb</code>.
          </p>
        </section>

        <section id="getting-started" className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="p-5 rounded border">
            <h2 className="text-xl font-semibold mb-2">Hotwire + Turbo</h2>
            <p className="text-gray-600">Use Turbo & Stimulus for fast, interactive UIs with minimal JS.</p>
          </div>
          <div className="p-5 rounded border">
            <h2 className="text-xl font-semibold mb-2">Models & CRUD</h2>
            <p className="text-gray-600">Generate resources with <code>rails g scaffold Post title body:text</code>.</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;