import React from 'react';
import { motion } from 'framer-motion';

function Education() {
  const fadeVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.3, duration: 1 } },
  };

  return (
    <>
      <section className="flex flex-col justify-center md:flex-row py-6 block-bg-hero px-10 w-full h-screen">
        <div className="flex flex-col  space-y-10 md:pr-8 md:space-x-16 md:space-y-28">
          <h1 className="text-6xl md:text-8xl md:mb-4">Education</h1>

          {/* MCA Section - Sticky */}
          <motion.div
            className="flex flex-col md:mb-4 md:sticky md:top-0"
            variants={fadeVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-semibold ">MCA</h1>
            <div className="pl-4 md:text-2xl md:pl-4">
              <p>Score: 8.2</p>
              <p>Years: 2022 - 2024</p>
              <p>University: Graphic Era Hill University, Dehradun</p>
            </div>
          </motion.div>

          {/* BCA Section - Sticky after MCA */}
          <motion.div
            className="flex flex-col mb-4 md:sticky md:top-32"
            variants={fadeVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-semibold ">BCA</h1>
            <div className="pl-4 md:text-2xl md:pl-4">
              <p>Score: 8.1</p>
              <p>Years: 2019 - 2022</p>
              <p>University: Graphic Era Hill University, Dehradun</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Education;
