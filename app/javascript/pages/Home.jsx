import { usePage } from "@inertiajs/react";

const Home = () => {
  const { user } = usePage().props;

  return (
    <>
      <div className="mx-auto max-w-4xl p-6 text-white" >
        <section className="text-center py-12">
          <h1 className="text-4xl font-bold mb-8">Welcome to R and R Chat</h1>
          <p className="text-lg">
            This app was built as a lightweight, 
            Discord-style chat room where you can join conversations in real time. 
            Messages update instantly through WebSockets, giving you a smooth, live experience without page reloads.
          </p>
        </section>

        <section id="getting-started" className="text-center py-5">
          <p className="text-lg mb-8">
            I created this project to learn and showcase how modern tools like Ruby on Rails, Inertia.js, and React can work together to power real-time applications. 
            It’s a simple but practical demo of combining Rails’ backend strength with the speed and interactivity of a JavaScript frontend.
            Whether you’re here to test, learn, or just chat, enjoy exploring how everything comes together!
          </p>
        </section>
      </div>
    </>
  );
}

export default Home;