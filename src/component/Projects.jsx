// import React from 'react';
// import { motion } from 'framer-motion';
// import useTypingAnimation from './TypingAnimation';

// function Projects() {
//   const txt = useTypingAnimation('Jects', 1200);
//   const Projects = [
//     { title: 'Notes Taking', url: 'https://notes-creating.netlify.app', des: 'A Note taking App Made using ReactJs, Tailwind.' },
//     {
//       title: 'Web Editor',
//       url: 'https://fronteditor.netlify.app/',
//       des: 'A online WebText Editor and render HTML,CSS,JS Made using React,Tailwind,CodeMirror.',
//     },
//     {
//       title: 'Password Generator',
//       url: 'https://pass-creator.netlify.app/',
//       des: 'A simple Password Genrator made using React.But I get Understanding of lots of Hooks in React. Like useEffect,useContext,useMemo,useRef.',
//     },
//     { title: 'Weather App', url: 'https://weather-creating.netlify.app', des: 'A simple Wether App that give me a UnderStanding of Working of API.' },
//   ];

//   return (
//     <section className="py-16 project-bg h-screen">
//       <h2 className="text-6xl lg:text-9xl text-center mb-8 py-16">
//         <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
//           Pro{txt}
//         </motion.span>
//       </h2>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 lg:px-56">
//         {Projects.map((project, index) => (
//           <a
//             key={index}
//             href={project.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-6 rounded-lg border h-64 flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-lg bg-project-link "
//           >
//             <h1 className="text-2xl font-semibold">{project.title}</h1>
//             <p className="h-full text-lg px-7 py-7">{project.des}</p>
//             <span className="text-blue-500 underline mt-auto">Visit Project</span>
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Projects;

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import useTypingAnimation from './TypingAnimation';

function Projects() {
  const txt = useTypingAnimation('Jects', 1200);
  const Projects = [
    { title: 'Notes Taking', url: 'https://notes-creating.netlify.app', des: 'A Note taking App Made using ReactJs, Tailwind.' },
    {
      title: 'Web Editor',
      url: 'https://fronteditor.netlify.app/',
      des: 'A online WebText Editor and render HTML,CSS,JS Made using React,Tailwind,CodeMirror.',
    },
    {
      title: 'Password Generator',
      url: 'https://pass-creator.netlify.app/',
      des: 'A simple Password Genrator made using React. It helped me understand many Hooks in React like useEffect, useContext, useMemo, and useRef.',
    },
    { title: 'Weather App', url: 'https://weather-creating.netlify.app', des: 'A simple Weather App that gave me an understanding of API workings.' },
  ];

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['20%', '-95%']);

  return (
    // <section ref={targetRef} className="py-16 project-bg h-[300vh]">
    //   <h2 className="text-6xl lg:text-9xl text-center mb-8 py-16">
    //     <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    //       Pro{txt}
    //     </motion.span>
    //   </h2>
    //   <div className="sticky top-0 hidden md:flex h-screen items-center overflow-hidden">
    //     <motion.div style={{ x }} className="flex gap-7">
    //       {Projects.map((project, index) => (
    //         <motion.div key={index} className="projectItem flex-none bg-gray-200 w-[300px] h-[200px] p-4 rounded-lg shadow-lg hover:shadow-xl">
    //           <h1 className="text-2xl font-semibold">{project.title}</h1>
    //           <p className="text-lg">{project.des}</p>
    //           <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
    //             Visit Project
    //           </a>
    //         </motion.div>
    //       ))}
    //     </motion.div>
    //   </div>

    //   <div className="flex flex-col md:hidden gap-14 px-24">
    //     {Projects.map((project, index) => (
    //       <div key={index} className="projectItem bg-gray-200 w-full h-auto p-4 rounded-lg shadow-lg hover:shadow-xl">
    //         <h1 className="text-xl font-semibold">{project.title}</h1>
    //         <p className="text-md">{project.des}</p>
    //         <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
    //           Visit Project
    //         </a>
    //       </div>
    //     ))}
    //   </div>
    // </section>

    <section ref={targetRef} className="py-16 project-bg h-[300vh]">
      <h2 className="text-6xl lg:text-9xl text-center mb-8 py-16">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          Pro{txt}
        </motion.span>
      </h2>

      {/* Horizontal Scroll for md+ */}
      <div className="sticky top-0 hidden md:flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-7">
          {Projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-start border border-[#7a3ad3] rounded-lg shadow md:flex-row md:max-w-xl project-card w-[400px] h-[400px] hover:scale-110 duration-150 bg-star"
            >
              {/* <img
                src={`https://via.placeholder.com/150?text=${project.title}`}
                alt={project.title}
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              /> */}
              <div className="flex flex-col justify-between pl-4 py-7">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{project.des}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Vertical Stack for sm screens */}
      <div className="flex flex-col md:hidden gap-4 px-4">
        {Projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center g-white border border-[#58269f] project-card w-[400px] h-[400px] rounded-lg shadow md:flex-row md:max-w-xl"
          >
            {/* <img
              src={`https://via.placeholder.com/150?text=${project.title}`}
              alt={project.title}
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            /> */}
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.des}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
