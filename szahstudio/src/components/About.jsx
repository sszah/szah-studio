import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variant';

const About = () => {
  const [ref, inView] = useInView ({
    threshold: 0.5,
  });

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div>
          {/* images */}
          <div className=''>img</div>
          {/* text */}
          <div>text</div>
        </div>
      </div>
    </section>
  );
};

export default About;
