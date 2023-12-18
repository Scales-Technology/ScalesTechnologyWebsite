import React from 'react'
import Header from '../../Components/Header/Header'
import "./AboutUs.css"
import aboutus from "../../Assets/aboutus.jpg"
import Footer from '../../Components/Footer/Footer'

export default function AboutUs() {
  return (
    <div>
        <Header />
        <div className='aboutUsTitle'>
            <h1>About Us </h1>
        </div>

      <div className='aboutusintro'>
        <div className='leftside'>
          <div className='briefIntro'>
            <h2>We Help You Get Solutions</h2>
            <p>Scales Technology Solutions is a
                business venture that is duly
                registered in Kenya as a
                private limited company.
                Scales Technology Solutions products
                and solutions ranges from sales and
                service of all types of Weighing
                equipment, Point Of Sale systems
                (Software and Hardware),
                Business automation systems and
                Office solutions.
                </p>
                <p>
                Scales Technology Solutions readily works with like-minded firms, dealers
                and manufacturers in service delivery through dealerships, reseller-ship and
                affiliate marketing. We continue to grow and as at 2023 has over 600 clients. Our most important
                goal is to create a professional relationship that our clients can depend on.
                </p>
                <h4 style={{color:"red"}}>Our Core Values</h4>
                <p>
                  <li>Customer Focus</li>
                  <li>Team Work</li>
                  <li>Intergrity</li>
                  <li>Creativity</li>
                </p>
          </div>
{/* still waiting...
          <div className='founders'>
            <div className='founderDetails'>
              <img src={aboutus} alt='founder' />
              <div className='founderDetail'>
                <h5>Founder</h5>
                <p>About Founder</p>
              </div>
            </div>
          </div>
  */}
        </div>
        <div className='rightside'>
          <img src={aboutus} alt='companyimage' />
          <div className='moreinfo'>
            <h4>Scales Technology Solutions</h4>
            <h5>Our Mission</h5>
            <p>
            To be the preferred regional provider of metrology & Related ICT technology 
            solutions for Point Of Sale and Business automation systems.
            </p>
          </div>
        </div>
      </div>

      <div className='OurTeam'>
        <h3>Meet Our Team</h3>
        <p>Scales Technology Solutions has technical personnel who have a vast
            experience in the weighing industry and ICT sector acquired over the years and have joined hands to offer the
            best quality of service and goods in the market today. With our vast and wide
            experience, we endeavor to offer high accuracy electronic weighing machines of all types that ensures a high
            degree of efficiency and reliability.
        </p>
        <div className='OurTeamsCard'>
          <div className='card'>
            <img src={aboutus} alt='icon' />
            <h6>Technical/Service Department</h6>
            <p>The Technical Department at Scales Technology Solutions is the backbone of our commitment 
              to precision and reliability. Our highly skilled technical personnel bring a wealth of 
              experience in the weighing industry. They are dedicated to ensuring the functionality and 
              accuracy of our electronic weighing machines. From installation and calibration to maintenance 
              and support, our technical experts are here to guarantee that your weighing equipment 
              operates at peak performance, providing you with the accuracy and dependability you require 
              for your business operations.
            </p>
          </div>
          <div className='card'>
          <img src={aboutus} alt='icon' />
            <h6>ICT Department</h6>
            <p>The ICT Department at Scales Technology Solutions is at the forefront of cutting-edge 
              technology integration. Our skilled and innovative team leverages the latest advancements 
              in Information and Communication Technology to enhance the functionality and efficiency of 
              our weighing solutions. From developing robust software solutions to ensuring seamless 
              connectivity, our ICT professionals are dedicated to providing intelligent and integrated 
              systems that meet the evolving needs of our clients.
            </p>
          </div>
          <div className='card'>
          <img src={aboutus} alt='icon' />
            <h6>Sales Department</h6>
            <p>In the Sales Department, our goal is to understand your unique requirements and deliver 
              tailored weighing solutions that exceed your expectations. Our sales team comprises experienced
               professionals with in-depth knowledge of the weighing industry. They are committed to providing 
               personalized service, guiding you through our product offerings, and ensuring you make informed 
               decisions. Whether you're a small business or a large enterprise, our Sales Department is here 
               to support you in finding the right weighing solutions to fit your needs.
            </p>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  )
}
