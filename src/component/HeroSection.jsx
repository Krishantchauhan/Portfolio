import React from 'react';

function HeroSection() {
  return (
    <section className="flex h-screen pt-52 block-bg-hero px-10">
      <div className="sd:hidden md:px-60 mb-20 ">
        <div className="purple-gradiant pr-9 ">
          <img src="/src/assets/avatar.png" alt="Profile Avatar" className=" w-52 h-52 mb-6 ml-20 m-10 " />
        </div>
      </div>
      <div>
        <h2 className="text-3xl">I'm Krishant Chauhan.</h2>
        <p className="text-xl mt-4">A Software Engineer | BCA & MCA Graduate, building delightful user experiences.</p>
      </div>
    </section>
  );
}

export default HeroSection;
