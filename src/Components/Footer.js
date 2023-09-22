import React from 'react'
import '../Css/Footer.css'
export default function Footer() {
  return (
    <>
      <div className='footer displayFlex' id='contact'>
        <div className='h-100 w-75'>
          <h2 className='text-white my-5'>Don't be shy! hit me up 👇</h2>
          <div className='d-flex my-5 footer-info' id='footer-info'>
          <div className='h-25 displayFlex' >
           <h1 className='mx-3'><i className="fa-solid fa-envelope" style={{color: "#ffffff"}}></i></h1>
           <div >
           <h6 className='text-white'>Email:</h6>
            <h5 className='text-yellow'><a className='nav-link' href="mailto:shreyas.ganesh911@gmail.com">shreyas.ganesh911@gmail.com</a>
            </h5>
           </div>
          
          </div>

          <div className='h-25 displayFlex  w-100 footer-location' >
           <h1 className='mx-2'><i className="fa-solid fa-location-dot" style={{color: "#ffffff"}} ></i></h1>
           <div>
           <h6 className='text-white'>Location:</h6>
            <h5 className='text-yellow'>Bengaluru, Karnataka, India.</h5>
           </div>
          
          </div>   
          </div>     
          <h2 className='footer-end'><a className='nav-link' target='_blank' rel="noreferrer" href="https://github.com/ShreyasGanesh911"><i className="fa-brands fa-github text-white"></i></a>
        <i className=" mx-4 fa-brands fa-linkedin text-white"></i>
        </h2>
        </div>

      </div>
    </>
  )
}
