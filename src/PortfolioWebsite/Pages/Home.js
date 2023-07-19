import React, { useEffect } from 'react'
import Typewriter from 'typewriter-effect';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
  import { Link } from 'react-router-dom';
export default function Home() {

  return (


<div className='mb-10 '>
     
      <div className="container ">
        <div className="row ">
          <div className="col-sm-8">
          <h5 className='i' > Hi, I'm Iftikhar Khan</h5> 
      <div className="a-box">
      <span className='a-text glowing-text ' > <Typewriter options={{ strings: ['DEVELOPER', 'DESIGNER','EDITOR'], autoStart: true,loop: true, }}  />    </span>
      </div>
      <p >Unleashing creativity through innovative design and captivating experiences. </p>
      <div className="d-flex  ">
      <button  className='btn-g'   > <a href="https://www.fiverr.com/iftikharkhan69?public_mode=true  " target="_blank">HIRE ME</a> </button>
      
      <span className='p-f' >My Portfolio</span>
      </div>
      <div className="icons">
      <a href="https://www.facebook.com/profile.php?id=100054223360476" target='_blank'>
      <FacebookIcon className='icon' />
    </a>
    <a href="https://www.instagram.com/iftikh4r._/" target='_blank'>
    <InstagramIcon className='icon' />
    </a>
   
     
      </div>
          </div>
          <div className="col-sm-4">
          <img className='home-img '  src="./Images/Profile.png" alt="" />
          </div>
        </div>
      </div>
  </div>
  )
}