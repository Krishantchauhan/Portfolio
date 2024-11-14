import React from 'react';

function Projects() {
  return (
    <section className="py-16 project-bg ">
      <h2 className="text-9xl font-bold text-center mb-8">ProJects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-56 ">
        <div className="bg-lightPurple p-6 rounded-lg border h-64">Notes Taking</div>
        <div className="bg-lightPurple p-6 rounded-lg border h-64">Web Editor</div>
        <div className="bg-lightPurple p-6 rounded-lg border h-64">Movie App</div>
        <div className="bg-lightPurple p-6 rounded-lg border h-64">Weather App</div>
      </div>
    </section>
  );
}

export default Projects;
