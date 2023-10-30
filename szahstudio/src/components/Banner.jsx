import React from 'react'
import Image from '../assets/logo.png';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variant';

const Banner = () => {
  return (
    <section className='min-h-[85vh]' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='text-[55px] font-bold leading-[0.8] lg:text-[80px]'>
              SZAH <span>STUDIO</span>
            </motion.h1>
            
            <motion.div 
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='mb-6 text-[36px] lg:text-[55px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-2'>I am a</span>
                <TypeAnimation
                  sequence={[
                    'Graphic Designer',
                    2000,
                    '',
                    2000,
                  ]}
                  speed={50}
                  className='text-accent'
                  wrapper='span'
                  repeat={Infinity}
                />
            </motion.div>
            
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}} 
              className='mb-5 max-w-lg mx-auto lg:mx-0'>
              My portfolio showcases a collection of creative and impactful design projects, reflecting my commitment to continuous improvement in the world of design.
            </motion.p>

            <motion.div 
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}} 
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>Contact Me</button>
              <a href="https://drive.google.com/file/d/1HPND6OdNmJDzkwdwZ7d9P9_HzF2sHv7R/view?usp=sharing" className='text-gradient btn-link'>
                My Portofolio
              </a>
            </motion.div>

            <motion.div 
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}} 
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href="https://www.instagram.com/szah10/">
                <FaInstagram/>
              </a>
              <a href="https://github.com/sszah ">
                <FaGithub/>
              </a>
              <a href="https://www.linkedin.com/in/szah/">
                <FaLinkedin/>
              </a>
            </motion.div>
          </div>

          {/* images */}
          <motion.div 
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            whileInView={'show'}
            className='hidden lg:flex flex-1 max-w-[450px] lg-max-w-[450px]'>
            <img src={Image} alt="logo"/>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Banner;