import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-10 flex justify-between items-center p-6 bg-[#1A0B2E] border-b-2 border-purple-600 rounded-lg">
      <div className="flex space-x-4">
        <a href="https://github.com/Krishantchauhan">
          <FaGithub className="hover:scale-125 duration-200" size={40} />
        </a>
        <a href="https://www.linkedin.com/in/krishant-chauhan/">
          <FaLinkedin className="hover:scale-125 duration-200" size={40} />
        </a>
        <a href="https://leetcode.com/u/krishantchauhan/">
          <button className="border rounded-lg px-3 py-2 hover:scale-110 duration-200 hover:bg-[#42256b] border-purple-600">Leetcode</button>
        </a>
        <a href="https://auth.geeksforgeeks.org/user/krishantchauhan">
          <button className="border rounded-lg px-3 py-2 hover:scale-110 duration-200 hover:bg-[#42256b] border-purple-600">GFG</button>
        </a>
      </div>
    </header>
  );
}

export default Header;
