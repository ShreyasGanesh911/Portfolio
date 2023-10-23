import React from 'react'
import pic1 from '../PersonalWebsiteImg/Home-laptop.png'
import { motion } from 'framer-motion'
import '../Css/Project.css'
export default function PersonalWebsite() {
  return (
    <>
             <div id='project-container' className=' project-container my-5 displayFlex bg-dark ' style={{flexFlow:'initial'}}>
        <div className=' mx-5 project-container-img' id='project-container-img' >
            <motion.img whileHover={{opacity:0.5}} className='w-100 h-100' style={{objectFit:"contain",borderRadius:'1.7rem'}} src={pic1}   alt="" />
          </div>
          <motion.div id='project-content' initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:0.2,duration:1}} className='project-content text-white displayFlex'>
            <div  className='displayFlex my-2 mx-4'>
            <h3 className='text-box'>Personal Website </h3>
              <h6 className='my-3 mx-2  text-yellow text-box'>( SEP 2023 )</h6>
            </div>
            
            <p className='text-white mx-4 ' style={{textAlign:'justify'}}>My personal portfolio website is a showcase of my web development skills and projects. Through a clean and responsive design, I present a collection of websites and web applications I've created.</p>
            <div className='text-white mx-4 my-3 d-flex'>
              <h6 className=' border' style={{padding:'5px'}}>React</h6>
              <h6 className='border mx-3' style={{padding:'5px'}}>Framer Motion</h6>
            </div>
            <div className='my-3 mx-4'>
              <button type="button" class="btn btn-outline-warning "> <a className='nav-link' target='_blank' rel="noreferrer" href='https://github.com/ShreyasGanesh911/Portfolio'>Code <i className="fa-brands fa-github" style={{color: '#f3f4f7'}}></i></a> </button>
              <button type="button" class="btn btn-outline-warning mx-3 disabled">Live Demo <i class="fa-solid fa-arrow-up-right-from-square" style={{color: '#f3f4f7'}}></i></button>
            </div>
          </motion.div>   
        </div>
    </>
  )
}
