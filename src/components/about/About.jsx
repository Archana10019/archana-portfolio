import React from "react";
import AboutImg from "../../asset/Myavatar.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <section
      id="About"
      className="bg-black text-white py-20 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          About <span className="text-indigo-500">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Image */}
          <div className="flex justify-center md:w-1/2">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-1 rounded-2xl shadow-2xl">
              <img
                src={AboutImg}
                alt="About Archana"
                className="rounded-2xl w-72 md:w-96 bg-black"
              />
            </div>
          </div>

          {/* Content */}
          <div className="md:w-1/2 space-y-8">

            {/* Profile Summary */}
            <div className="flex gap-4">
              <IoArrowForward size={24} className="mt-1 text-indigo-500" />
              <div>
                <h3 className="text-xl font-semibold">
                  Full Stack Developer
                </h3>
                <p className="text-gray-400 mt-2 leading-relaxed">
                  Motivated Full Stack Developer skilled in HTML, CSS,
                  JavaScript, React, Node.js, Express, Supabase, and SQL.
                  Experienced in building scalable web applications and
                  RESTful APIs with strong problem-solving skills.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="flex gap-4">
              <IoArrowForward size={24} className="mt-1 text-indigo-500" />
              <div>
                <h3 className="text-xl font-semibold">
                  Education
                </h3>
                <p className="text-gray-400 mt-2 leading-relaxed">
                  Bachelor of Computer Applications (BCA) – School of
                  Management Sciences, Lucknow (2022 – 2025).
                  <br />
                  Full Stack Web Development – Masai School (2025 – 2026).
                </p>
              </div>
            </div>

            {/* Career Objective */}
            <div className="flex gap-4">
              <IoArrowForward size={24} className="mt-1 text-indigo-500" />
              <div>
                <h3 className="text-xl font-semibold">
                  Career Objective
                </h3>
                <p className="text-gray-400 mt-2 leading-relaxed">
                  To contribute to innovative software development projects
                  and deliver user-focused solutions while continuously
                  improving my technical expertise.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;