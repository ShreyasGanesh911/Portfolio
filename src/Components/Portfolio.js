import React from 'react'
import PersonalWebsite from '../ProjectFile/PersonalWebsite'
import DishDash from '../ProjectFile/DishDash'
import FocusUno from '../ProjectFile/FocusUno'

export default function Portfolio() {
  return (
    <>
      <div id='portfolio' className='page-fit bg-black displayFlex' style={{flexDirection:'column'}}>
        <div className='w-75 my-5'>
        <h1 className='text-yellow text-about my-5' style={{fontSize:"60px", borderBottom:"1px solid" ,paddingTop:"20px" }}>Projects .</h1>
        </div>
        <PersonalWebsite/>
        <DishDash/>
        <FocusUno/>
      </div>
    </>
  )
}
