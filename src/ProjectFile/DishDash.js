import React from 'react'
import pic1 from '../DishDashImg/DD-home-laptop.png'

import { motion } from 'framer-motion'
import '../Css/Project.css'
export default function DishDash() {
  return (
    <>
              <div id='project-container' className=' project-container  my-5 displayFlex bg-dark '>
        <div className=' mx-5 project-container-img' id='project-container-img'>
            <motion.img id='project-img' whileHover={{opacity:0.5}} className=' project-img'  src={pic1}   alt="" />
          </div>
          <motion.div initial={{opacity:0,x:-30}} id='project-content' whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:0.2,duration:1}} className='text-white project-content displayFlex'>
            <div className='displayFlex my-2 mx-5'>
            <h3 className='text-box '>DishDash </h3>
              <h6 className='my-3 mx-2  text-yellow text-box'>( AUG 2023 )</h6>
            </div>
            
            <p className='text-white mx-5 ' style={{textAlign:'justify'}}>I used express for building the online food ordering app DishDash. The app is easy to navigate and contains a checkout portion which provides a full user experience. The design is straightforward and responsive.</p>
            <div className='text-white mx-5 my-3 d-flex'>
              <h6 className=' border' style={{padding:'5px'}}>React</h6>
              <h6 className='border mx-3' style={{padding:'5px'}}>Express</h6>
            </div>
            <div className='my-3 mx-5'>
              <button type="button" className="btn btn-outline-warning "> <a className='nav-link ' target='_blank' rel="noreferrer" href='https://github.com/ShreyasGanesh911/DishDash'>Code <i className="fa-brands fa-github" style={{color: '#f3f4f7'}}></i></a>  </button>
              <button type="button" className="btn btn-outline-warning mx-3">Live Demo <i class="fa-solid fa-arrow-up-right-from-square" style={{color: '#f3f4f7'}}></i></button>
            </div>
          </motion.div>   
        </div>
    </>
  )
}
