
import React from 'react'
import CountUp from 'react-countup';
import Aos from 'aos';
import { useEffect } from 'react';
import { Link } from 'react-scroll';
export default function About() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
    let purple = '#a50aa5'
  return (
    <div>
  <div class="container a-container">
    <div class="row">
      <div class="col-md-6 d-flex">
        <img src="https://i.pinimg.com/564x/ed/db/bf/eddbbf7fcb612c0ac96e0ffd0391cf25.jpg" alt="" class="img-fluid" />
      </div>
      <div class="col-md-6 about ">
        <h3 class="glowing-text">ABOUT ME</h3>
        <h4>I'm a Freelance MERN Developer With 3 Years Of experience.</h4>
        <p class="mt-3">Hey There! I am Iftikhar Ahmad With 3 Years Of Development Experience</p>
        <div class="row">
          <div class="col-4">
            <h3 class="incnum"><CountUp end={3} /></h3>
            <h6>Years Of Experience</h6>
          </div>
          <div class="col-4">
            <h3 class="incnum"><CountUp end={7} />k+</h3>
            <h6>Projects Completed</h6>
          </div>
          <div class="col-4">
            <h3 class="incnum"><CountUp end={12} />k+</h3>
            <h6>Satisfied Clients</h6>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-6">
            <Link to='contact' >
            <button class="btn-g"> Let's Talk </button>
            </Link>
          </div>
          
          <div class="col-6">
            <span class="p-f">My Portfolio</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
