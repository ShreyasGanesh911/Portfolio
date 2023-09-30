import React from 'react'
import PersonalWebsite from '../ProjectFile/PersonalWebsite'
import DishDash from '../ProjectFile/DishDash'
import FocusUno from '../ProjectFile/FocusUno'

export default function Portfolio() {
  return (
    <>
      <div id='portfolio' className='page-fit bg-black displayFlex' style={{flexDirection:'column'}}>
        <h1 className='w-75 my-5 text-yellow text-about my-5' style={{fontSize:"60px", borderBottom:"1px solid" ,paddingTop:"20px" }}>Projects.</h1>
        <PersonalWebsite/>
        <DishDash/>
        <FocusUno/>
      </div>
    </>
  )
}
