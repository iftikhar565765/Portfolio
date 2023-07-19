import React from 'react'

export default function Contact() {
    let purple = '#a50aa5'
    return (
        <>
           <div className="container d-flex">
            <div className="left-c">
             <h3 className='glowing-text' >Get In Touch</h3>
             <h1>LET'S WORK  <br /> TOGETHER!</h1>
            </div>
            <div className="right-c">
               <div className="contact">
                <form method="POST" action="https://formspree.io/f/xjvdwjkp">
               <div className="wave-group">
      <input required type="text" className="input"   name="username"/>
      <span className="bar"></span>
      <label className="label">
        <span className="label-char" style={{ '--index': 0 }}>N</span>
        <span className="label-char" style={{ '--index': 1 }}>a</span>
        <span className="label-char" style={{ '--index': 2 }}>m</span>
        <span className="label-char" style={{ '--index': 3 }}>e</span>
      </label>
    </div> <br />
    <div className="wave-group">
      <input required type="text" className="input" name="email" />
      <span className="bar"></span>
      <label className="label">
        <span className="label-char" style={{ '--index': 0 }}>E</span>
        <span className="label-char" style={{ '--index': 1 }}>m</span>
        <span className="label-char" style={{ '--index': 2 }}>a</span>
        <span className="label-char" style={{ '--index': 3 }}>i</span>
        <span className="label-char" style={{ '--index': 3 }}>l</span>
      </label>
    </div> <br />


    <div className="wave-group">
      <input required type="text" className="input" name="message"/>
      <span className="bar"></span>
      <label className="label">
        <span className="label-char" style={{ '--index': 0 }}>M</span>
        <span className="label-char" style={{ '--index': 1 }}>e</span>
        <span className="label-char" style={{ '--index': 2 }}>s</span>
        <span className="label-char" style={{ '--index': 3 }}>s</span>
        <span className="label-char" style={{ '--index': 3 }}>a</span>
        <span className="label-char" style={{ '--index': 3 }}>g</span>
        <span className="label-char" style={{ '--index': 3 }}>e</span>
      </label>
    </div>



                  <button className='btn-g mt-4' >Send Message</button>
                  </form>
               </div>
            </div>
           </div>
        </>
    )
}
