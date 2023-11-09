import React, { useState } from 'react'
import "./HomeScreen.css"
import Header from '../../Components/Header/Header'
import Calibration from "../../Assets/measurement.png"
import AppDevelopment from '../../Assets/app-development.png'
import Gmail from '../../Assets/gmail.png'
import Phonecall from '../../Assets/phone-call.png'
import Instagram from '../../Assets/instagram.png'
import Facebook from '../../Assets/facebook.png'
import Linkdin from '../../Assets/linkedin.png'
import twitter from '../../Assets/twitter.png'
import location from '../../Assets/placeholder.png'
import timer from '../../Assets/clock.png'



export default function HomeScreen() {

    

  return (
    <div className='HomeScreen'>
        <Header />

        <div className='HomeScreenIntro'>
            <div className='HomeScreenMenu'>
                <h1 className='HSMenuTitle'> MENU </h1>
                <hr />
                <ul className='MenuListContainer'>
                    <a href='/ourproducts'> <li  className='MenuList'>Our Products</li> </a>
                    
                    <li  className='MenuList' >Computing Solution</li>
                    <li className='MenuList'>Repairs and Servicing</li>
                    <li className='MenuList'>Softwares</li>
                    <li className='MenuList'>About Us</li>
                    <li className='MenuList'>Contact Us</li>
                </ul>
            </div>

            <div className='HomeScreenBanner'>
                <button  className='BannerButton'> Shop With Us</button>
            </div>

            <div className='HomeScreenAds'>
                <div className='Seminars'>
                    <h1 className='SeminarTitle'> Seminars & Webinars</h1>
                    <hr />
                    <div className='SeminarsContainer'>
                        <div className='SeminarImage'>

                        </div>
                        <div className='SeminarData'>
                            <h5>Title</h5>
                            <h7>Link</h7>
                            <p>Date</p>
                        </div>
                    </div>
                </div>
                <div className='Adverts'>
                <h1 className='SeminarTitle'> Ads & Offers</h1>
                    <hr />
                    <div className='SeminarsContainer'>
                        <div className='SeminarImage'>

                        </div>
                        <div className='SeminarData'>
                            <h5>Title</h5>
                            <h7>Link</h7>
                            <p>Date</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* What We Offer */}
        <div className='WhatWeOffer'>
            <h1 className='WWOH1'>What We Offer</h1>

            <div className='WWODetails'>

                <div className='WWORows'>
                    <div className='WWOColumns'>
                        <img src={AppDevelopment} alt='AppDevelopment' className='WWOImages'/>
                        <div className='WWOWords'>
                            <h3>Software Development</h3>
                            <p className='WWOParagraphs'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            </p>
                        </div>
                    </div>
                    <div className='WWOColumns'>
                        <img src={AppDevelopment} alt='AppDevelopment' className='WWOImages'/>
                        <div className='WWOWords'>
                            <h3>Software Development</h3>
                            <p className='WWOParagraphs'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className='WWORows'>
                    <div className='WWOColumns'>
                        <img src={AppDevelopment} alt='AppDevelopment' className='WWOImages'/>
                        <div className='WWOWords'>
                            <h3>Software Development</h3>
                            <p className='WWOParagraphs'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            </p>
                        </div>
                    </div>

                    <div className='WWOColumns'>
                        <img src={AppDevelopment} alt='AppDevelopment' className='WWOImages'/>
                        <div className='WWOWords'>
                            <h3>Software Development</h3>
                            <p className='WWOParagraphs'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </div>


        {/*Our Partners*/}
        <div className='partners'>
            <h1> OUR PARTNERS </h1>
            <div className='partnersLogosContainer'>
                <div className='partnersLogo'>
                    <img src={AppDevelopment} alt='Logo' />
                    <h5>COmpany name</h5>
                </div>
                <div className='partnersLogo'>
                    <img src={AppDevelopment} alt='Logo' />
                    <h5>COmpany name</h5>
                </div>
                <div className='partnersLogo'>
                    <img src={AppDevelopment} alt='Logo' />
                    <h5>COmpany name</h5>
                </div>
                <div className='partnersLogo'>
                    <img src={AppDevelopment} alt='Logo' />
                    <h5>COmpany name</h5>
                </div>
                <div className='partnersLogo'>
                    <img src={AppDevelopment} alt='Logo' />
                    <h5>Company Name</h5>
                </div>
            </div>
        </div>

        {/* Best Selling*/}
        <div className='BestSelling'>

            <h1> Best Selling Products </h1>
            <div className='bestSellingProducts'>
                <div className='bestSellingCard'>
                    <img src={AppDevelopment} alt='Products' />
                    <h8>Product Name</h8>
                    <button>Order</button>
                </div>
                <div className='bestSellingCard'>
                    <img src={AppDevelopment} alt='Products' />
                    <h8>Product Name</h8>
                    <button>Order</button>
                </div>
                <div className='bestSellingCard'>
                    <img src={AppDevelopment} alt='Products' />
                    <h8>Product Name</h8>
                    <button>Order</button>
                </div>
            </div>

        </div>

        {/**Footer */}
        <div className='Footer'>
            <div className='ContactUs'>
                <h1> Contact Us </h1>
                <hr />
                <div className='icons-Details'>
                    <img  src={Gmail} alt='icons' />
                    <h5>sales@scales-technoloy.co.ke</h5>
                </div>
                <div className='icons-Details'>
                    <img  src={Phonecall} alt='icons' />
                    <h5>+254 743 233223 / +254 756 233223</h5>
                </div>
                <div className='socialIcons'>
                <img  src={Linkdin} alt='icons' />
                <img  src={Instagram} alt='icons' />
                <img  src={Facebook} alt='icons' />
                <img  src={twitter} alt='icons' />
                </div>
            </div>
            <div className='Location'>
                <h1>Our Location</h1>
                <hr />
                <div className='location-Details'>
                    <img  src={location} alt='icons' />
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




    </div>
  )
}
