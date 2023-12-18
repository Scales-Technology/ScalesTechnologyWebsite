import React from 'react'
import Gmail from '../../Assets/gmail.png'
import Phonecall from '../../Assets/phone-call.png'
import Instagram from '../../Assets/instagram.png'
import Facebook from '../../Assets/facebook.png'
import Linkdin from '../../Assets/linkedin.png'
import twitter from '../../Assets/twitter.png'
import location from '../../Assets/placeholder.png'
import timer from '../../Assets/clock.png'

export default function Footer() {
  return (
    <div className='Footer'>
        <div className='ContactUs'>
            <h1> Contact Us </h1>
            <hr />
            <div className='icons-Details'>
                <img  src={Gmail} alt='icons' />
                <h5><a className='tellink' href='mailto:sales@scales-technology.co.ke'>sales@scales-technology.co.ke</a></h5>
            </div>
            <div className='icons-Details'>
                <img  src={Phonecall} alt='icons' />
                <h5><a className='tellink' href='tel:+254743233223'>+254 743 233223</a> /<a className='tellink' href='tel:+254 756233223'> +254 756 233223</a></h5>
            </div>
            <div className='socialIcons'>
            <a href='https://www.linkedin.com/company/scales-tech-solutions/posts/?feedView=all'> <img  src={Linkdin} alt='icons' /></a> 
            <a href='https://www.instagram.com/scalesnpos/?utm_medium=copy_link'><img  src={Instagram} alt='icons' /></a> 
             <a href='https://www.facebook.com/scalestech'> <img  src={Facebook} alt='icons' /></a>
            <a href='https://twitter.com/scalestechLTD?lang=en'><img  src={twitter} alt='icons' /></a>
            </div>
        </div>
        <div className='Location'>
            <h1>Our Location</h1>
            <hr />
            <div className='location-Details'>
               <a href='/location'> <img  src={location} alt='icons' /></a>
                <h5>Along Bunyala Road, 150m from Bunyala/Uhuru Highway Round about – Nairobi, Kenya</h5>
            </div>
            <div className='location-Details'>
                <img  src={timer} alt='icons' />
                <div className='locationTime'>
                    <h4>Working Hours</h4>
                    <h5>MONDAY-FRIDAY; 0800Hrs-1700Hrs <br />SATURDAY; 0800Hrs-1300Hrs</h5>
                </div>
            </div>
        </div>  
        <div className='QuickLinks'>
            <h1> Quick Links</h1>
            <hr />
            <h4>Home</h4>
            <h4>Our Products</h4>
            <h4>Our Services</h4>
            <h4>About Us</h4>
        </div>

    </div>

  )
}
