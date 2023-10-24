import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variant';

const services = [
  {
    name: 'Figma',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ante vel orci luctus venenatis. Nunc fringilla.',
    link: 'Learn More',
  },
  {
    name: 'Canva',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ante vel orci luctus venenatis. Nunc fringilla.',
    link: 'Learn More',
  },  
];

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3}}
            className='flex-1'
          >
            <h2 className='h2 text-accent mb-6'>Tools I Use</h2>
            <h3 className='h3 max-w-[455px] mb-16'>Here are some software tools I use for designing.</h3>
            <button className='btn btn-sm'>See My Work</button>
          </motion.div>
          
          {/* tools */}
          <motion.div
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3}}
          >
            {/* tools list */}
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                <div 
                  className='border-b border-white/20 h-[146px] mb-[38px] flex'
                  key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                    <p className='font-secondary leading-tight'>{description}</p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a href="#" className='btn w-10 h-6 mb-[43px] flex justify-center items-center'>
                      <BsArrowUpRight />
                    </a>
                    <a href="#" className='text-gradient text-sm'>{link}</a>
                  </div>
                </div> 
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services;