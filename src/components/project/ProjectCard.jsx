import React from "react";

const ProjectCard = ({ title, main, tech, demoLink, codeLink }) => {
  return (
    <div className="bg-zinc-900 border border-gray-800 rounded-2xl p-6 
    shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-2 
    transition-all duration-300">

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm md:text-base leading-relaxed">
        {main}
      </p>

      {/* Tech Stack */}
      {tech && (
        <p className="text-indigo-400 text-sm font-semibold mt-4">
          Tech Stack: {tech}
        </p>
      )}

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-indigo-600 
            hover:bg-indigo-700 transition font-semibold text-sm"
          >
            Live Demo
          </a>
        )}

        {codeLink && (
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full border border-indigo-500 
            text-indigo-400 hover:bg-indigo-500 hover:text-white 
            transition font-semibold text-sm"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;