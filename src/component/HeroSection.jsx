import React from 'react';
import { motion } from 'framer-motion';
import useTypingAnimation from './TypingAnimation';

function HeroSection() {
  const fname = useTypingAnimation('Krishant', 1000);
  const lname = useTypingAnimation('Chauhan', 1000);

  return (
    <section className="flex flex-col md:flex-row md:h-screen pt-40 block-bg-hero px-10">
      <div className="mt-8 md:mt-0 md:ml-10 w-full ">
        <h2 className="text-4xl md:text-8xl md:mt-16 ">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            I'm {fname}
          </motion.span>
        </h2>
        <h2 className="text-4xl mt-4 md:text-8xl md:mt-8  lg:text-8xl lg:mt-16 lg:px-48">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{lname}</div>
          </motion.span>
        </h2>
        {/* <div className="text-xl mt-32 md:py-7 md:px-14 ">
          <Education />
        </div> */}
      </div>
    </section>
  );
}

export default HeroSection;
