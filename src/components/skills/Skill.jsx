import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiExpress, SiSupabase, SiMysql } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 size={50} color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3Alt size={50} color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJs size={50} color="#F7DF1E" /> },
    { name: "React", icon: <FaReact size={50} color="#61DAFB" /> },
    { name: "Node.js", icon: <FaNodeJs size={50} color="#3C873A" /> },
    { name: "Express.js", icon: <SiExpress size={50} color="#FFFFFF" /> },
    { name: "Supabase", icon: <SiSupabase size={50} color="#3ECF8E" /> },
    { name: "SQL", icon: <SiMysql size={50} color="#00758F" /> },
    { name: "Git & GitHub", icon: <FaGitAlt size={50} color="#F05032" /> },
  ];

  return (
    <section id="Skill" className="bg-black text-white py-20 px-6 md:px-20">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
        My <span className="text-indigo-500">Skills</span>
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-gray-800 rounded-2xl p-6 
            flex flex-col items-center justify-center 
            hover:scale-105 hover:border-indigo-500 
            transition-all duration-300 shadow-lg"
          >
            <div className="mb-4">{skill.icon}</div>
            <h3 className="text-lg font-semibold text-gray-300">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;