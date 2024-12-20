import React from 'react';
import { motion } from 'framer-motion';
import useTypingAnimation from './TypingAnimation';

function HeroSection() {
  const fname = useTypingAnimation('Krishant', 1000);
  const lname = useTypingAnimation('Chauhan', 1000);

  return (
    <section className="flex flex-col md:flex-row md:h-screen pt-40 block-bg-hero px-10 mb-64 md:mb-0 h-screen">
      <div className="mt-44 md:mt-0 md:ml-10 w-full ml-16 ">
        <h2 className="text-4xl md:text-8xl md:mt-16 ">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            I'm {fname}
          </motion.span>
        </h2>
        <h2 className="text-4xl mt-8 md:text-8xl md:mt-8  lg:text-8xl lg:mt-16 lg:px-48">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{lname}</div>
          </motion.span>
        </h2>
      </div>
    </section>
  );
}

export default HeroSection;
