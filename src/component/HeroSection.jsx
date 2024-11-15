import React from 'react';

function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row h-screen pt-40 block-bg-hero px-10">
      <div className="hidden sm:block md:px-60 mb-20 ">
        <div className="purple-gradiant pr-9">
          <img src="/src/assets/avatar.png" alt="Profile Avatar" className="w-52 h-52 mb-6 ml-20 " />
        </div>
      </div>
      <div className="mt-8 md:mt-0 md:ml-10 ">
        <h2 className="text-3xl mt-7">I'm Krishant Chauhan.</h2>
        <p className="text-xl mt-4 py-7 px-14 ">A Software Engineer | BCA & MCA Graduate, building delightful user experiences.</p>
      </div>
    </section>
  );
}

export default HeroSection;
