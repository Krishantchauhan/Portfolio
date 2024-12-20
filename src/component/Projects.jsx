import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import useTypingAnimation from './TypingAnimation';

const fadeVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.3, duration: 1 } },
};

const ProjectCard = ({ title, url, description }) => (
  <motion.a
    className="card-container flex flex-col justify-start border border-[#7a3ad3] rounded-lg shadow w-[400px] h-[400px] bg-star"
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    variants={fadeVariants}
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ amount: 0.8 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
  >
    <div className="flex flex-col justify-between pl-4 py-7">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{description}</p>
    </div>
  </motion.a>
);

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
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ['20%', '-95%']);

  return (
    <section ref={targetRef} className="h-[120vh] md:py-16 project-bg md:h-[300vh]">
      <motion.div className="fixed top-0 left-0 h-2 bg-slate-50 origin-left z-50" style={{ scaleX: scrollYProgress }} />

      <h2 className="text-6xl lg:text-9xl text-center mb-8 py-16">
        <motion.span initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} variants={fadeVariants}>
          Pro{txt}
        </motion.span>
      </h2>

      {/* Horizontal Scroll for md+ */}
      <motion.div className="sticky top-0 hidden md:flex md:h-screen items-center overflow-hidden" style={{ x }}>
        <div className="flex gap-7">
          {Projects.map((project, index) => (
            <ProjectCard key={index} title={project.title} url={project.url} description={project.des} />
          ))}
        </div>
      </motion.div>

      {/* Vertical Stack for sm screens */}
      <div className="flex flex-col md:hidden gap-4 px-4 h-40">
        {Projects.map((project, index) => (
          <ProjectCard key={index} title={project.title} url={project.url} description={project.des} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
