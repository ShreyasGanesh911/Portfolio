import React from 'react'
import '../Css/About.css'
export default function About() {
  return (
    <>
      <div id='about' className='page-fit bg-black displayFlex'>
      <div id='about-container' className='displayFlex w-75 ' style={{justifyContent:"space-around"}}>
      <div id='about-content' className='w-50'>
        <h1 className='text-yellow'>About me</h1>
        <h5 className='text-white' style={{textAlign:'justify'}}>I'm an arising web developer based in Bengaluru. I am a third-year student at RV Institute Of Technology And Management, Bengaluru, majoring in information science. The ability to create software that solves real-world problems and enhances user experiences has always captivated my imagination . I have some experience in software development, and I'm seeking for internships to hone my abilities.</h5>
      </div>
      <div className='displayFlex'> 
        <div style={{width:"300px",height:"300px",backgroundColor:"red"}}></div>
      </div>
      </div>
      

      </div>
    </>
  )
}
