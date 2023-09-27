import { motion} from 'framer-motion'
import {React} from 'react'

export default function SkillDisplay(props) {
  return (
    <>
    <motion.div id='skillset-item' className='text-white mx-5 displayFlex skillset-item'  whileHover={{scale:1.2 }} whileInView={{y:0,scale:1}} initial={{y:100,scale:0}} viewport={{once:true}}  transition={{stiffness:100,type:'spring',duration:0.5 , }} style={{height:"90px",width:"50px",flexDirection:"column"}}     >
      <h1 className='text-white displayFlex'><i className={props.class}></i></h1>
      <h6 className=" my-5 text-about" style={{textAlign:"center"}}>{props.skill}</h6>
    </motion.div>
    </>
  )
}
