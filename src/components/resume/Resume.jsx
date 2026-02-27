import React from "react";
import resumeFile from "../../asset/Archana_Pal_Resume.pdf";

const Resume = () => {
  return (
    <section
      id="resume"
      className="bg-black text-white py-20 px-6 md:px-20 border-t border-gray-800"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
        My <span className="text-indigo-500">Resume</span>
      </h2>

      {/* Subtitle */}
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
        Download or view my resume to learn more about my skills, projects,
        education, and experience as a Full Stack Developer.
      </p>

      {/* Resume Card */}
      <div className="max-w-3xl mx-auto bg-zinc-900 border border-gray-800 rounded-2xl p-10 text-center shadow-lg hover:shadow-indigo-500/20 transition duration-300">
        
        <h3 className="text-2xl font-semibold mb-4">
          Archana Pal - Full Stack Developer
        </h3>

        <p className="text-gray-400 mb-8">
          Skilled in React, Node.js, Express, Supabase, and SQL. Experienced in
          building scalable full-stack web applications and REST APIs.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          
          {/* View Resume */}
          <a
            href={resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full font-semibold transition duration-300 shadow-md hover:scale-105"
          >
            📄 View Resume
          </a>

          {/* Download Resume */}
          <a
            href={resumeFile}
            download="Archana_Pal_Resume.pdf"
            className="px-6 py-3 border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white rounded-full font-semibold transition duration-300 shadow-md hover:scale-105"
          >
            ⬇ Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;