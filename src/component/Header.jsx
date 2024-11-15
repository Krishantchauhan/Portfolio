import React from 'react';
import { FaGithub } from 'react-icons/fa';

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-10 flex justify-between items-center p-6 bg-[#1A0B2E] border-b-2 border-purple-600 rounded-lg">
      <div>
        <FaGithub size={40} />
      </div>
    </header>
  );
}

export default Header;
