import React from 'react';

function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-[#1A0B2E] border-b-2 border-purple-600 rounded-lg">
      <h1 className="text-xl font-bold">Krishant Chauhan</h1>
      <nav>
        <ul className="flex gap-6">
          <li>Home</li>
          <li>About</li>
          <li>Lab</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
