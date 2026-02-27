import React from "react";

const Project = () => {
  const projectData = [
    {
      title: "Fleet Management System",
      description:
        "Developed a full-stack fleet management application to track vehicles, drivers, and trip records with real-time database integration.",
      tech: "React, Express, Supabase, SQL",
      github: "https://github.com/Archana10019",
      demo: "#",
    },
    {
      title: "To-Do List Application",
      description:
        "Built a full-stack task management application with authentication, real-time updates, and CRUD operations for efficient task tracking.",
      tech: "React, Supabase, JavaScript",
      github: "https://github.com/Archana10019",
      demo: "#",
    },
    {
      title: "Amazon Clone (HTML & CSS)",
      description:
        "Created a responsive Amazon homepage clone using pure HTML and CSS with modern layout, flexbox, and responsive design.",
      tech: "HTML, CSS",
      github: "https://github.com/Archana10019",
      demo: "#",
    },
  ];

  return (
    <section
      id="Project"
      className="bg-black text-white py-20 px-6 md:px-20"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
        My <span className="text-indigo-500">Projects</span>
      </h2>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-gray-800 rounded-2xl p-8 
            shadow-lg hover:scale-105 hover:border-indigo-500 
            transition-all duration-300"
          >
            {/* Title */}
            <h3 className="text-2xl font-bold mb-4">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <p className="text-sm text-indigo-400 font-semibold mb-6">
              Tech Stack: {project.tech}
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 transition font-semibold"
              >
                GitHub
              </a>

              <a
                href={project.demo}
                className="px-5 py-2 rounded-full border border-gray-600 hover:border-indigo-500 hover:text-indigo-400 transition font-semibold"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;