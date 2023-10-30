import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../variant';

const Contact = () => {
  const [formData, setFormFData] = useState({
    name:'',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormFData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch ('https://getform.io/f/948872b0-ba80-477a-b08e-51f688ed23f9', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
      } else {
        alert('Form submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          
          {/* text */}
          <div className='flex-1'>
            <motion.div 
              variants={fadeIn('right', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3}}
            >
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Let's Get In Touch</h4> 
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>I'm Looking Forward To<br /> Connect With You!</h2>
            </motion.div>
          </div>

          {/* form */}
          <motion.form 
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3}}
            className='flex-1 border rounded-2x1 flex flex-col gap-y-6 pb-12 p-6 items-start' onSubmit={handleSubmit}
          >
            <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type="text" 
              name='name'
              placeholder='Your Name'
              value={formData.name}
              onChange={handleInputChange}
            />

            <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type="email"
              name='email'
              placeholder='Your Email'
              value={formData.email}
              onChange={handleInputChange}
            />

            <textarea 
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              name='message'
              placeholder='Your Message'
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            
            <button className='btn btn-lg'>Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact;