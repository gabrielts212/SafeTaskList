import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">
          &copy; 2023 Gabriel Nascimento. Todos os direitos reservados.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/gabrielts212"
            className="text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub size={40} color="#6d98fd" />
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-nascimento-pereira/"
            className="text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={40} color="#6d98fd" />
          </a>
          <a
            href="https://github.com/gabrielts212/SafeTaskList/tree/main"
            className="text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <VscGithub size={40} color="#6d98fd" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
