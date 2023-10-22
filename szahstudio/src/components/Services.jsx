import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variant';

const services = [
  {
    name: 'UI/UX Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ante vel orci luctus venenatis. Nunc fringilla, tortor sit amet sodales imperdiet, erat leo congue libero, id congue neque justo non justo. Maecenas tristique metus at tortor feugiat, nec viverra quam facilisis.',
    link: 'Learn More',
  },
  {
    name: 'Social Media Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ante vel orci luctus venenatis. Nunc fringilla, tortor sit amet sodales imperdiet, erat leo congue libero, id congue neque justo non justo. Maecenas tristique metus at tortor feugiat, nec viverra quam facilisis.',
    link: 'Learn More',
  },
  {
    name: 'Poster Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ante vel orci luctus venenatis. Nunc fringilla, tortor sit amet sodales imperdiet, erat leo congue libero, id congue neque justo non justo. Maecenas tristique metus at tortor feugiat, nec viverra quam facilisis.',
    link: 'Learn More',
  },
];

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div>
          {/* text & image */}
          <div>
            <h2 className='h2 text-accent mb-6'>What I Do</h2>
            <h3 className='h3 max-w-[455px] mb-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ante vel orci luctus venenatis. Nunc fringilla, tortor sit amet sodales imperdiet, erat leo congue libero</h3>
          </div>
          {/* services */}
          <div>services</div>
        </div>
      </div>
    </section>
  )
}

export default Services;