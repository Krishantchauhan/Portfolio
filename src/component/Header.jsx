import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi'; // Hamburger and close icons
import { motion } from 'framer-motion';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-[#1A0B2E] border-b-2 border-purple-600">
      <div className="flex justify-between items-center p-4">
        {/* Full Menu for Medium and Larger Screens */}
        <nav className="hidden md:flex space-x-4 items-center">
          <motion.a whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }} href="https://github.com/Krishantchauhan" aria-label="GitHub">
            <FaGithub className="" size={30} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            href="https://www.linkedin.com/in/krishant-chauhan/"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="" size={30} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            href="https://leetcode.com/u/krishantchauhan/"
          >
            <button className="border rounded-lg px-3 py-2 hover:bg-[#42256b] border-purple-600">Leetcode</button>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            href="https://auth.geeksforgeeks.org/user/krishantchauhan"
          >
            <button className="border rounded-lg px-3 py-2 hover:bg-[#42256b] border-purple-600">GFG</button>
          </motion.a>
        </nav>

        {/* Email Section */}
        <div className="text-sm md:text-xl break-words">
          <h1>krishant.work@gmail.com</h1>
        </div>

        {/* Hamburger Menu Button for Small Screens */}
        <div className="flex md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu" className="text-white">
            {isMenuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>

        <div className="hidden md:block">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            href="/path/to/resume"
            className="border rounded-lg px-3 py-2 hover:bg-[#42256b] border-purple-600"
          >
            Resume
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col space-y-4 p-4 bg-[#1A0B2E] text-center">
          <a href="https://github.com/Krishantchauhan" aria-label="GitHub">
            <FaGithub className="hover:scale-125 duration-200 mx-auto" size={30} />
          </a>
          <a href="https://www.linkedin.com/in/krishant-chauhan/" aria-label="LinkedIn">
            <FaLinkedin className="hover:scale-125 duration-200 mx-auto" size={30} />
          </a>
          <a href="https://leetcode.com/u/krishantchauhan/">
            <button className="border rounded-lg px-3 py-2 hover:scale-110 duration-200 hover:bg-[#42256b] border-purple-600">Leetcode</button>
          </a>
          <a href="https://auth.geeksforgeeks.org/user/krishantchauhan">
            <button className="border rounded-lg px-3 py-2 hover:scale-110 duration-200 hover:bg-[#42256b] border-purple-600">GFG</button>
          </a>
          <a href="/path/to/resume">
            <button className="border rounded-lg px-3 py-2 hover:scale-110 duration-200 hover:bg-[#42256b] border-purple-600">Resume</button>
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;
