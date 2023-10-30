import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../variant';
import R1 from '../assets/R1.png';
import R2 from '../assets/R2.png';
import R3 from '../assets/R3.png';

const Projects = () => {
  return (
    <section className='section' id='review'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div 
              variants={fadeIn('right', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
                Here For <br />Some Review!
              </h2>
              <h3 className='h3 max-w-[590px] mb-5'>
                Discover what others are saying about my products and services in my Testimonials section.
              </h3>
              <button className='btn btn-sm'>View All Project</button>
            </div>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={R1} alt="project1" />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>Re-design UI &  Added features to the Krealogy application</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10'>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={R2} alt="project1" />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Insta Feeds</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>Nusantara x Jurnal Festival 2023</span>
              </div>
            </div>
            
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={R3} alt="project1" />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Package Design</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>Posters, X-Banner</span>
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Projects;