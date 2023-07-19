import React from 'react'

export default function Form() {
    return (
        <div className='container' >

            <div className="location">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.4165296024175!2d73.25978636347783!3d29.996194027808713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393d6fe2f84b51d3%3A0x73050593dcc90c72!2sJinnah%20Colony%20Bah%C4%81walnagar%2C%20Bahawalnagar%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1677088783495!5m2!1sen!2s" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="text-center"><h1>FEEL FREE TO CONTACT</h1></div>
            <form className='form' method="POST" action="https://formspree.io/f/xjvdwjkp">
                <input type="text" name="username" placeholder="Your UserName" /><br />
                <input type="email" name="email" placeholder="Your email" /><br />
                <textarea name="message" placeholder="Test Message"></textarea><br />
                <button type="submit" className='btn-purple' id='btn-send' >Send</button>
            </form>

        </div>



    )
}
