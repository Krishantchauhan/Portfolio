import React from 'react';
import useTypingAnimation from './TypingAnimation';

function Projects() {
  const skills = useTypingAnimation('kills', 1500);
  return (
    <section className=" h-screen border">
      {/* <div className="skills-bg"></div> */}
      <div className="border flex justify-center">
        <h1 className="text-8xl">S{skills}</h1>
      </div>
    </section>
  );
}

export default Projects;
