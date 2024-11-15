import React from 'react';

function Projects() {
  const Projects = [
    { title: 'Notes Taking', url: 'https://notes-creating.netlify.app' },
    { title: 'Web Editor', url: 'https://fronteditor.netlify.app/' },
    { title: 'Password Generator', url: 'https://pass-creator.netlify.app/' },
    { title: 'Weather App', url: 'https://weather-creating.netlify.app' },
  ];

  return (
    <section className="py-16 project-bg">
      <h2 className="text-6xl lg:text-9xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 lg:px-56">
        {Projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-lg border h-64 flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-lg bg-project-link magicpattern"
          >
            <h1 className="text-2xl font-semibold">{project.title}</h1>
            <span className="text-blue-500 underline mt-auto">Visit Project</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
