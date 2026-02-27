import React from "react";

import avatarImg from "../../asset/Avatar.png";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 pt-28 gap-10"
    >
      {/* LEFT CONTENT */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-lg md:text-2xl text-gray-400 mb-2">
          Hello, I'm
        </h2>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          Archana <span className="text-indigo-500">Pal</span>
        </h1>

        <h3 className="text-xl md:text-3xl font-semibold mt-3 text-gray-300">
          Full Stack Developer
        </h3>

        <p className="text-gray-400 mt-5 text-sm md:text-lg max-w-xl">
          Motivated Full Stack Developer skilled in HTML, CSS, JavaScript, React,
          Express, Supabase, and SQL. I build responsive web applications and
          scalable RESTful APIs with a focus on clean UI and user experience.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 transition duration-300 font-semibold shadow-lg hover:scale-105"
          >
            Contact Me
          </a>

          <a
            href="https://github.com/Archana10019"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-gray-700 hover:border-indigo-500 hover:text-indigo-400 transition duration-300 font-semibold"
          >
            View GitHub
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE (AVATAR) */}
      <div className="md:w-1/2 flex justify-center">
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-1 rounded-full shadow-2xl">
          <img
            src={avatarImg}
            alt="Archana Pal"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full bg-black"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;