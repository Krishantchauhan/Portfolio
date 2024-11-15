// import React from 'react';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';

// function Header() {
//   return (
//     <header className="fixed top-0 left-0 w-full z-10 flex justify-between items-center p-6 bg-[#1A0B2E] border-b-2 border-purple-600 rounded-lg">
//       <div className="flex justify-between w-full">
//         <div className="flex space-x-4 ">
//           <a href="https://github.com/Krishantchauhan">
//             <FaGithub className="hover:scale-125 duration-200" size={40} />
//           </a>
//           <a href="https://www.linkedin.com/in/krishant-chauhan/">
//             <FaLinkedin className="hover:scale-125 duration-200" size={40} />
//           </a>
//           <a href="https://leetcode.com/u/krishantchauhan/">
//             <button className="border rounded-lg px-3 py-2 hover:scale-110 duration-200 hover:bg-[#42256b] border-purple-600">Leetcode</button>
//           </a>
//           <a href="https://auth.geeksforgeeks.org/user/krishantchauhan">
//             <button className="border rounded-lg px-3 py-2 hover:scale-110 duration-200 hover:bg-[#42256b] border-purple-600">GFG</button>
//           </a>
//         </div>
//         <div className="flex space-x-10 mr-64 text-xl pt-2">
//           <h1>krishant.work@gmail.com</h1>
//         </div>
//         <div>
//           <a>
//             <button className="border rounded-lg px-3 py-2 hover:scale-110 duration-200 hover:bg-[#42256b] border-purple-600">Resume</button>
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;

import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi'; // Hamburger and close icons

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-[#1A0B2E] border-b-2 border-purple-600">
      <div className="flex justify-between items-center p-4">
        {/* Full Menu for Medium and Larger Screens */}
        <nav className="hidden md:flex space-x-4 items-center">
          <a href="https://github.com/Krishantchauhan" aria-label="GitHub">
            <FaGithub className="hover:scale-125 duration-200" size={30} />
          </a>
          <a href="https://www.linkedin.com/in/krishant-chauhan/" aria-label="LinkedIn">
            <FaLinkedin className="hover:scale-125 duration-200" size={30} />
          </a>
          <a href="https://leetcode.com/u/krishantchauhan/">
            <button className="border rounded-lg px-3 py-2 hover:scale-110 duration-200 hover:bg-[#42256b] border-purple-600">Leetcode</button>
          </a>
          <a href="https://auth.geeksforgeeks.org/user/krishantchauhan">
            <button className="border rounded-lg px-3 py-2 hover:scale-110 duration-200 hover:bg-[#42256b] border-purple-600">GFG</button>
          </a>
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
          <a href="/path/to/resume">
            <button className="border rounded-lg px-3 py-2 hover:scale-110 duration-200 hover:bg-[#42256b] border-purple-600">Resume</button>
          </a>
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
