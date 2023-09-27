import {React} from 'react'
import '../Css/Landing.css'
import { motion} from 'framer-motion'
import '../Css/Landing.css'
const right='>'
const rightB='{'
const leftB='}'
export default function LandingPage() {

  return (
    <>
    <div id="home" className='landing page-fit bg-black displayFlex'>
        <div id='landing-container' className='text-white displayFlex'>
            <div className='mx-4'>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8,delay:0.5}}  id='circle' className='circle'></motion.div>

                <motion.h5 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.1,delay:1}}>Hi, my name is</motion.h5>
                <motion.h1 className='text-yellow text-about' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.1,delay:1}} style={{color:"#ede60c",fontSize:"80px"}}>Shreyas </motion.h1>
                <motion.h1  style={{color:"rgb(255 255 255 / 41%)"}} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.1,delay:1.1}} >I love creating things for the web.</motion.h1>
                <motion.h5 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.1,delay:1.1}} className='my-3 text-about'>Web developer</motion.h5>
            </div>
            <motion.div id='dotted-bg-div' className='background displayFlex-div' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.1,delay:0.8}}>
            <motion.div className='frame displayFlex-div' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1}}>
		<div className='inner-frame displayFlex-div' >
			<div className="text-area-frame">
					<p className='text-white my-2 text-retro'> const greet = () ={right} console.log ("HelloWorld") <br /> <br />
          useEffect( ()={right} {rightB} <br />
          setTimeout( () ={right} greet(),5000) <br />
          {leftB} )
          
          
          </p>
			</div>
			<div className="console text-retro">
				<div className='console-header mx-2'>Console</div>
        <div className='d-flex mx-2'><motion.p  initial={{scale:0,x:-70,opacity:0.5}} animate={{scale:1,x:0,opacity:1}} transition={{delay:5}} >HelloWorld</motion.p>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:5,duration:0.85,repeat:Infinity,type:'tween'}} className='mx-1'>|</motion.p></div>
					
          
			</div>
		</div>
		</motion.div>

                 </motion.div>
        </div>
    </div> 
    </>
  )
}
/*
            <motion.div  initial={{y:0,opacity:0.8}} animate={{y:-10,scale:1,opacity:1}} transition={{repeat:Infinity,duration:0.8,repeatType:'reverse'}} className='displayFlex codeimage'> 
            
                  <div  className="landingFont text-yellow">{left}</div>  
                  <div className='landingFont '>/</div>  
                  <div className='landingFont text-yellow'>{right}</div>  
                 </motion.div>

*/ 