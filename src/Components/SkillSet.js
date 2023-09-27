import React from 'react'
import SkillDisplay from './SkillDisplay'
import '../Css/SkillSet.css'
export default function SkillSet() {
    const skills = [{skill:'CSS3',class:"fa-brands fa-css3-alt  fa-xl"},{skill:'HTML5',class:"fa-brands fa-html5 fa-xl"},{skill:'JavaScript',class:"fa-brands fa-js  fa-xl"},{skill:'Bootstrap',class:"fa-brands fa-bootstrap  fa-xl"},{skill:'React',class:"fa-brands fa-react  fa-xl fa-spin"},{skill:'Node',class :'fa-brands fa-node  fa-xl'}]
  return (
    <>
     <div id='skillset'  className='page-fit bg-black text-white displayFlex'>
        <div id='skillset-conatiner' className='displayFlex' style={{flexDirection:"column"}}>
        <div id='skillHeadingDiv' className='skillHeadingDiv'>
            <h5 style={{textAlign:"center"}}>Sell the problem you solve not the product</h5>
            <h1 className='text-align my-3 text-about text-yellow'  style={{textAlign:"center",fontSize:"60px"}}>Skills & Experience</h1>
            
        </div>
        <div className=" my-5 displayFlex skillset-content-display" id='skillset-content-display' >
            {skills.map((e)=>{
                return (<SkillDisplay skill={e.skill} class={e.class}/>)
            })}
        </div>

        </div>
       
     </div>
    </>
  )
}
