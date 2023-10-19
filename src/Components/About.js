import React from 'react'
import '../Css/About.css'
import { motion } from 'framer-motion'
export default function About() {
  return (
    <>
      <div id='about' className='page-fit bg-black displayFlex'>
      <div id='about-container' className='displayFlex w-75 ' style={{justifyContent:"space-around"}}>
      <motion.div id='about-content' className='w-50' initial={{x:-160,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.2,duration:1}} viewport={{once:true}} >
        <h1 className='text-yellow text-about'>About me</h1>
        <h5 className='text-white text-about' style={{textAlign:'justify'}}>I'm an arising web developer based in Bengaluru. I am a second-year student at RV Institute Of Technology And Management, Bengaluru, majoring in information science. The ability to create software that solves real-world problems and enhances user experiences has always captivated my imagination . I have some experience in web development, and I'm seeking for internships to hone my abilities.</h5>
        <button type="button" class="btn btn-outline-warning my-2 "><a className='nav-link ' href='../ShreyasMontadka.pdf' download>Resume <i className="fa-solid fa-file" style={{color: '#f3f4f7'}}></i></a></button>
        <button type="button" class="btn btn-outline-warning my-2 mx-3 "><a className='nav-link ' target='_blank' rel="noreferrer" href='https://github.com/ShreyasGanesh911'>GitHub <i className="fa-solid fa-arrow-up-right-from-square" style={{color: '#f3f4f7'}}></i></a></button>
      </motion.div>
      <div className='displayFlex'> 
        <div style={{width:"300px",height:"300px",backgroundColor:"red"}}></div>
      </div>
      </div>
      

      </div>
    </>
  )
}
