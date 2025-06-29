// src/components/Footer.jsx
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400 py-6 px-4 mt-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Sparsh Marwah. All rights reserved.
        </p>

        <div className="flex space-x-6">
          <a
            href="https://github.com/marwahsparsh24"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/sparsh-marwah/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
