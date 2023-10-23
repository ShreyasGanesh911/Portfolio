import React from 'react'
import pic1 from '../FocusUnoImg/FocusUno-login.png'
import { motion } from 'framer-motion'
export default function FocusUno() {
  return (
    <>
        <div id='project-container' className='  project-container my-5 displayFlex bg-dark ' style={{flexFlow:'initial'}}>
        <div className=' project-container-img mx-5 ' id='project-container-img'>
            <motion.img id='project-img' whileHover={{opacity:0.5}} className='project-img' src={pic1}   alt="" />
          </div>
          <motion.div id='project-content ' initial={{opacity:0,x:-30}} viewport={{once:true}} whileInView={{opacity:1,x:0}} transition={{delay:0.2,duration:1}} className='project-content text-white displayFlex'>
            <div className='displayFlex my-2 mx-4'>
            <h3 className=' text-box '>Focus Uno </h3>
              <h6 className='my-3 mx-2  text-yellow text-box'>( JUNE 2023 )</h6>
            </div>
            
            <p className='text-white mx-4 'style={{textAlign:'justify'}}>
            My very first MERN project, Focus Uno, is a to-do app that enables users to log a list of things they need to finish. The design is kept simple and user-friendly.
            </p>
            <div className='text-white mx-4 my-3 d-flex'>
              <h6 className=' border text-box' style={{padding:'5px'}}>React</h6>
              <h6 className='border mx-3 text-box' style={{padding:'5px'}}>Bootstrap</h6>
            </div>
            <div className='my-3 mx-4'>
              <button type="button" class="btn btn-outline-warning "> <a className='nav-link' target='_blank' rel="noreferrer" href='https://github.com/ShreyasGanesh911/FocusUno'>Code <i className="fa-brands fa-github" style={{color: '#f3f4f7'}}></i></a></button>
              <button type="button" class="btn btn-outline-warning mx-3">Live Demo <i class="fa-solid fa-arrow-up-right-from-square" style={{color: '#f3f4f7'}}></i></button>
            </div>
          </motion.div>   
        </div>
    </>
  )
}
