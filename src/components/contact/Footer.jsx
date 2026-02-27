import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <section
      id="contact"
      className="bg-black text-white py-16 px-6 md:px-20 border-t border-gray-800"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        
        {/* Left Side - Heading */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            Contact <span className="text-indigo-500">Me</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-lg">
            I’m open to internships, collaborations, and freelance projects.
            Feel free to reach out!
          </p>
        </div>

        {/* Right Side - Contact Info */}
        <div className="bg-zinc-900 border border-gray-800 rounded-2xl p-6 w-full md:w-auto shadow-lg">
          <ul className="space-y-4 text-sm md:text-lg">
            
            {/* Email */}
            <li className="flex items-center gap-3 hover:text-indigo-400 transition">
              <MdOutlineEmail size={22} />
              <span>your.email@gmail.com</span>
            </li>

            {/* LinkedIn */}
            <li className="flex items-center gap-3 hover:text-indigo-400 transition">
              <CiLinkedin size={22} />
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/yourusername
              </a>
            </li>

            {/* GitHub */}
            <li className="flex items-center gap-3 hover:text-indigo-400 transition">
              <FaGithub size={22} />
              <a
                href="https://github.com/Archana10019"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/Archana10019
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-gray-500 text-sm mt-12 border-t border-gray-800 pt-6">
        © 2026 Archana | Full Stack Developer Portfolio
      </div>
    </section>
  );
};

export default Footer;