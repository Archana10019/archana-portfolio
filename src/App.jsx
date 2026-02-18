import React from "react";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-black to-indigo-900 text-white min-h-screen">
      
      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm <span className="text-purple-400">Archana Pal</span> 👋
        </h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">
          Full Stack Developer skilled in React, Node.js, Express, Supabase, and SQL.
          I build responsive and scalable web applications with modern UI and strong backend logic.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="https://github.com/Archana10019"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-semibold"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/archana-pal-890a17298"
            className="border border-purple-400 px-6 py-3 rounded-xl font-semibold hover:bg-purple-600"
          >
            LinkedIn
          </a>

          <a
            href="/resume.pdf"
            download
            className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl font-semibold"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-400 mb-6">About Me</h2>
        <p className="text-gray-300 leading-7">
          I am a motivated Full Stack Developer skilled in HTML, CSS, JavaScript,
          React, Express, Supabase, and SQL. I enjoy building responsive web
          applications and RESTful APIs with scalable and user-focused solutions.
          Currently pursuing BCA and trained in Full Stack Development from Masai School.
        </p>
      </section>

      {/* SKILLS */}
      <section className="py-16 px-6 bg-black/40">
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-10">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["HTML","CSS","JavaScript","React","Node.js","Express","Supabase","SQL"].map((skill) => (
            <span key={skill} className="bg-purple-700/30 border border-purple-500 px-4 py-2 rounded-xl">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-400 mb-10 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-black/50 p-6 rounded-2xl border border-purple-700">
            <h3 className="text-2xl font-semibold mb-2">Fleet Management System</h3>
            <p className="text-gray-300">
              Full-stack fleet management application to track vehicles, drivers,
              and trips using React, Express, Supabase, and SQL with RESTful APIs
              and real-time database integration.
            </p>
          </div>

          <div className="bg-black/50 p-6 rounded-2xl border border-purple-700">
            <h3 className="text-2xl font-semibold mb-2">To-Do List Application</h3>
            <p className="text-gray-300">
              Task management app with authentication, CRUD operations, and
              responsive UI for efficient daily task tracking and productivity.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-purple-400 mb-6">
          Contact Me
        </h2>
        <p className="text-gray-300">📧 archanapal1910@gmail.com</p>
        <p className="text-gray-300">📱 7523911836</p>
      </section>

      <footer className="text-center py-6 border-t border-purple-800 text-gray-400">
        © 2026 Archana Pal | Full Stack Developer
      </footer>
    </div>
  );
      }
