import React from 'react'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'


export default function Contact() {
 
  const [ref, inView] = useInView ({
    threshold: 0.5,
});
 
  return (
    <section className='section px-7 py-20 font-inter bg-[#f2f2f2] dark:bg-[#222222] text-[#2e2e2d] dark:text-[#f2f2f2] h-auto ' id='contact' ref={ref}>
    <div className='container mx-auto '>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:items-center lg:gap-x-20 lg:gap-y-0 '>
            <div className='grid grid-rows-1 lg:mx-6'>
                <motion.div
                variants={fadeIn('up', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0}}>
                    <h1 className='leading-none font-inter tracking-tight font-medium text-5xl md:text-8xl lg:text-9xl text-left'>CONTACT</h1>
                    <h2 className='text-[1.4rem] md:text-3xl mb-4 max-w-[690px] text-justify'>I am currently a Front-End Engineer Apprentice at Qonto since 
                    september 2023 and for one year, but we can talk!</h2>
                    <p className='mb-6 text-justify max-w-[640px]'> 
                        If you have any questions, comments, or if you are interested in collaborating later, please do not hesitate
                        to contact me. I am always happy to meet new people and discuss topics related to computer science and
                        web development, I am also open to receiving advice from experienced professionals in the field.
                    </p>
                    <div className='flex gap-4'>
                        <Link to="mailto:alicebergonhe@gmail.com" target="blank" className='cursor-pointer' ><button className='my-4 font-inter dark:text-[#222222] dark:bg-[#f2f2f2] text-[#f2f2f2] px-4 py-2 text-lg rounded-sm 
                        border border-[#2e2e2d] dark:border-[#f2f2f2] dark:hover:text-[#3b3b3b] bg-[#2e2e2d] hover:text-[#d4d4d4] 
                        hover:bg-[#222222] duration-500 cursor-pointer flex items-center justify-center'>Email<span className='flex text-xl justify-center items-center ml-3'><ion-icon name="mail-unread-outline"></ion-icon></span></button></Link> 

                         <Link to="https://github.com/Alicexplore" target="blank" className='cursor-pointer' ><button className='my-4 font-inter dark:text-[#222222] dark:bg-[#f2f2f2] text-[#f2f2f2] px-4 py-2 text-lg rounded-sm 
                        border border-[#2e2e2d] dark:border-[#f2f2f2] dark:hover:text-[#3b3b3b] bg-[#2e2e2d] hover:text-[#d4d4d4] 
                        hover:bg-[#222222] duration-500 cursor-pointer flex items-center justify-center'>Github<span className='flex text-xl justify-center items-center ml-3'><ion-icon name="logo-github"></ion-icon></span></button></Link> 

                        <Link to="https://www.linkedin.com/in/alicebergonhe/" target="blank" className='cursor-pointer' ><button className='my-4 font-inter dark:text-[#222222] dark:bg-[#f2f2f2] text-[#f2f2f2] px-4 py-2 text-lg rounded-sm 
                        border border-[#2e2e2d] dark:border-[#f2f2f2] dark:hover:text-[#3b3b3b] bg-[#2e2e2d] hover:text-[#d4d4d4] 
                        hover:bg-[#222222] duration-500 cursor-pointer flex items-center justify-center'>Linkedin<span className='flex text-xl justify-center items-center ml-3'><ion-icon name="logo-linkedin"></ion-icon></span></button></Link>      
                    </div> 
                </motion.div>
            </div>
            <div className='grid grid-rows-1 lg:mx-6'>
            <div className='flex flex-row gap-20 mb-32'>
                <h1 className='text-justify'>I CREATE APPEALING INTERFACES<br />THAT USERS LOVE TO INTERACT WITH.</h1> 
                <h1>03.</h1> 
            </div> 
            </div>
            </div>
    </div>   
</section>

)
}

