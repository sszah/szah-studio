import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variant';
import Logo from '../assets/pp.png';

const About = () => {
  const [ref, inView] = useInView ({
    threshold: 0.5,
  });

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg-items-center lg:gap-x-20 lg:gap-y-0'>
          {/* images */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3}}
          >
          <img src={Logo} alt="profpic" />
          </motion.div>
          
          {/* text */}
          <motion.div 
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3}}
            className='flex-1'
          >
            <h2 className='h2 text-accent'>About Me</h2>
            <h3 className='h3 mb-2'>I'm a 7th-semester Information Systems student. Proficient in Canva and Figma, I've harnessed these tools to craft captivating designs for social media and applications.</h3>
            <p className='mb-4'>text</p>
          
          {/* number */}
          <div className='flex gap-x-1 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={3} duration={3}/> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of <br />
                Experience 
              </div>
            </div>

            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={35} duration={2}/> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Projects <br />
                Completed 
              </div>
            </div>

            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={15} duration={2}/> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Satisfied <br />
                Client
              </div>
            </div>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
