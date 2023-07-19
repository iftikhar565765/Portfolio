import React from 'react'

export default function HoverCard() {
  let purple = '#a50aa5'
  return (
    <>-
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <div class="content-w">
        <h1 class="glowing-text" >My Latest <br /> Work</h1>
        <p class="p1"> Real-Time Projects That i have created wit mern stack </p>
        <button class="btn btn-g">View All Projects</button>
      </div>
      <div class="cardd">
        <img class="bg-image hover-zoom" src="https://i.pinimg.com/564x/5e/bd/0e/5ebd0e103b55d9501ee7fd118817968d.jpg" alt="" />
        <div class="card-b">
          <h4 class="p-f">UI/UX Design</h4>
          <h6>Les Copain Website</h6>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="cardd">
        <img src="https://i.pinimg.com/564x/b9/45/8d/b9458ddeba49e404a06b355dce06ee29.jpg" alt="" />
        <div class="card-b">
          <h4 class="p-f">UI/UX Design</h4>
          <h6>Custom Store</h6>
        </div>
      </div>
      <div class="cardd">
        <img src="https://www.cssdesignawards.com/cdasites/2022/202205/20220518115854.jpg" alt="" />
        <div class="card-b">
          <h4 class="p-f">UI/UX Design</h4>
          <h6>E-commerce Website</h6>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
