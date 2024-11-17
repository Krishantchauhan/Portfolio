import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="text-center w-full ml-3 mr-2 py-4 space-y-4 md:rounded-t-2xl md:border-t border-slate-400 bg-black text-white md:flex md:justify-between md:ml-0 md:mr-0 md:py-0 md:items-center md:px-20">
      <h1>Designed and Developed by Krishant Chauhan</h1>
      <h1 className="md:pb-5 md:mr-56 pb-1">Copyright © 2024 KC</h1>
      <div className=" flex justify-center space-x-4 md:items-center md:space-x-8 md:pb-5">
        <a href="https://github.com/Krishantchauhan" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 text-2xl">
          <FaGithub size="35" />
        </a>
        <a
          href="https://www.linkedin.com/in/krishant-chauhan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 text-2xl"
        >
          <FaLinkedin size="35" />
        </a>
        <a
          href="https://www.instagram.com/krishantchauhan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 text-2xl"
        >
          <FaInstagram size="35" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
