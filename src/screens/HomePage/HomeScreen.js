import React, { useState, useEffect } from 'react'
import "./HomeScreen.css"
import Header from '../../Components/Header/Header'
import AppDevelopment from '../../Assets/app-development.png'
import repair from "../../Assets/repair-tools.png"
import calibration from "../../Assets/measurement.png"
import IOT from "../../Assets/iot.png"
import custom from "../../Assets/custom.png"
import training from "../../Assets/analysis.png"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slideimage from "../../Assets/aboutus.jpg"
import Footer from '../../Components/Footer/Footer'
import Aclas from "../../Assets/aclasLogo.png"
import Esit from "../../Assets/EsitLogo.png"
import Keli from "../../Assets/KeliLogo.png"
import Zemic from "../../Assets/ZemicLogo.webp"
import Tscale from "../../Assets/TscaleLogo.jpg"
import { db } from '../../Database/config'
import { useNavigate } from 'react-router-dom'
import WeighBridge from '../../Assets/weighbridgecategory.png'
import Accessories from "../../Assets/Accessories.webp"
import Software from "../../Assets/softwarecategory.webp"
import OfficeComputing from "../../Assets/officecomputingcategory.jpg"
import WeighBalance from "../../Assets/weighBalancecategory.webp"
import Catalogue from '../../Modals/Catalogue/Catalogue' 
import WhatsAppIcon from '../../Components/Whatsapp/Whatsapp'


export default function HomeScreen({navigation}) {

    const [videoEnded, setVideoEnded] = useState(false);
    const [documents, setDocuments] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const navigate = useNavigate();
 
    useEffect(() => {
        const fetchData = async () => {
          try {
            // Replace 'yourCollection' with the actual name of your collection
            const collectionRef = db.collection('Products');
    
            // Replace 'fieldValue1', 'fieldValue2', 'fieldValue3' with the values you want to search for
            const querySnapshot = await collectionRef
              .where('ProductName', '==', 'PS6CX Price Computing Scale')
              .get();
    
            const doc1 = querySnapshot.docs[0].data();
    
            const querySnapshot2 = await collectionRef
              .where('ProductName', '==', 'ECS Cash Register Scale')
              .get();
    
            const doc2 = querySnapshot2.docs[0].data();
    
            const querySnapshot3 = await collectionRef
              .where('ProductName', '==', 'OCS crane scale with BT')
              .get();
    
            const doc3 = querySnapshot3.docs[0].data();
    
            setDocuments([doc1, doc2, doc3]);
          } catch (error) {
            console.error('Error fetching documents:', error);
          }
        };
    
        fetchData();
      }, []);

    const handleVideoEnd = () => {
      setVideoEnded(true);
      // Add any additional logic you want to execute when the video ends
    };


    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
        autoplaySpeed: 20000, // Set the interval between slides in milliseconds
        beforeChange: (current, next) => {
            if (next === 2 && !videoEnded) {
              // If the next slide is the video slide and the video hasn't ended, prevent the slider from moving
              return false;
            } else {
              // Reset the videoEnded state for the next iteration
              setVideoEnded(false);
              return true;
            }
          },
      };
      const handleShopButtonClick = () => {
        // Navigate to the details page or the desired route when the button is clicked
        navigate('/ourproducts'); // Replace 'Details' with the name of your details screen or route
      };

      

  return (
    <div className='HomeScreen'>
        <p>hello</p>
        <Header />
        <WhatsAppIcon />

        <div className='HomeScreenIntro'>
        <div className='Seminars'>
                    <h1 className='SeminarTitle'> Seminars & Webinars</h1>
                    <hr />
                    <p>To be updated soon...</p>
                    {/*
                    <div className='SeminarsContainer'>
                        <div className='SeminarImage'>

                        </div>
                        <div className='SeminarData'>
                            <h5>Title</h5>
                            <h7>Link</h7>
                            <p>Date</p>
                        </div>
                    </div>
  */}
                </div>

            <div className='HomeScreenBanner'>
      <div className='slider-container'>
        <Slider {...settings}>
          {/* Slide 1 */}
          <div>
          <img
                src="https://firebasestorage.googleapis.com/v0/b/scalestechnologywebapp.appspot.com/o/Assets%2F4kbanner.jpg?alt=media&token=c0d2bde3-6321-4f3d-9c28-3cd3dd471388"
                alt="Slide 1"
                className="slider-image"
            />
          </div>
          {/* Slide 2 */}
          <div>
            <img src={slideimage} alt="Slide 2" className="slider-image" />
          </div>
          <div>
            <iframe
            title="YouTube Video"
            width="100%"
            height="450px"
            src="https://www.youtube.com/embed/ZzCzAgX23uk?rel=0&autoplay=1&mute=1" // Add &mute=1 to mute the video
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onEnded={handleVideoEnd}
            className='slider-image'
            ></iframe>
        </div>
        </Slider>
      </div>
      {/* Button on the foreground */}
      <button className='BannerButton' onClick={handleShopButtonClick}>Shop With Us</button>
    </div>

            <div className='HomeScreenAds'>
                
                <div className='Adverts'>
                <h1 className='SeminarTitle'> Ads & Offers</h1>
                    <hr />
                    <div className='SeminarsContainer'>
                        <img 
                        src = "https://firebasestorage.googleapis.com/v0/b/scalestechnologywebapp.appspot.com/o/Assets%2Fps6x-01.jpg?alt=media&token=30fe5583-24ab-4f23-a924-26d22c70bf9a"
                        alt='advert'
                        />
                    </div>
                </div>
            </div>
        </div>
        {/* Best Selling*/}
        <div className='BestSelling'>

            <h1> Our Catalogue </h1>
            <div className='bestSellingProducts'>
                <div className='bestSellingCard'>
                    <img src={WeighBalance} alt='Products' />
                    <h8>Weighing Balances</h8>
                    <button>View</button>
                </div>

                <div className='bestSellingCard'>
                    <img src={WeighBridge}  alt='Products' />
                    <h8>WeighBridges</h8>
                    <button onClick={handleShopButtonClick}>View</button>
                </div>

                <div className='bestSellingCard'>
                    <img src={Software}  alt='Products' />
                    <h8>Softwares</h8>
                    <button onClick={handleShopButtonClick}>View</button>
                </div>

                <div className='bestSellingCard'>
                    <img src={Accessories}  alt='Products' />
                    <h8>Accessories</h8>
                    <button onClick={handleShopButtonClick}>View</button>
                </div>

                <div className='bestSellingCard'>
                    <img src={OfficeComputing} alt='Products' />
                    <h8>Office Computing</h8>
                    <button onClick={handleShopButtonClick}>View</button>
                </div>
            </div>
            

        </div>
        {isModalOpen && (
        <Catalogue product={selectedProduct} onClose={closeModal} />
      )}
      {/* ... (existing code) */}

        {/* What We Offer */}
        <div className='WhatWeOffer'>
            <h1 className='WWOH1'>What We Offer</h1>

            <div className='WWODetails'>

                <div className='WWORows'>
                    <div className='WWOColumns'>
                        <img src={AppDevelopment} alt='AppDevelopment' className='WWOImages'/>
                        <div className='WWOWords'>
                            <h3>Software Solutions</h3>
                            <p className='WWOParagraphs'>
                                This includes software for data collection, analysis and reporting.
                                This software can help manage measurement data, ensure compliance and enable remote monitering. 
                            </p>
                        </div>
                    </div>
                    <div className='WWOColumns'>
                        <img src={calibration} alt='AppDevelopment' className='WWOImages'/>
                        <div className='WWOWords'>
                            <h3>Calibration Services</h3>
                            <p className='WWOParagraphs'>
                                They are essential to maintain the accuracy of weighing instruments.Scales Tech offers calibration and certification
                                services to ensure that scales meet metrological standards.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='WWORows'>
                    <div className='WWOColumns'>
                        <img src={repair} alt='AppDevelopment' className='WWOImages'/>
                        <div className='WWOWords'>
                            <h3>Repair and Servicing</h3>
                            <p className='WWOParagraphs'>
                                Scales repair regular maintenance to function correctly. Scales Tech offer maintenance and repair
                                services to keep weighing instruments in optimal condition.
                            </p>
                        </div>
                    </div>

                    <div className='WWOColumns'>
                        <img src={custom} alt='AppDevelopment' className='WWOImages'/>
                        <div className='WWOWords'>
                            <h3>Customized Solutions </h3>
                            <p className='WWOParagraphs'>
                                In some cases, businesses require custom-designed weighing systems to meet unique requirements Scales Tech 
                                designs and builds customized solutions tailored to specific applications.
                            </p>
                        </div>
                    </div>

                </div>

                <div className='WWORows'>
                    <div className='WWOColumns'>
                        <img src={IOT} alt='AppDevelopment' className='WWOImages'/>
                        <div className='WWOWords'>
                            <h3>IOT Enabled Solutions</h3>
                            <p className='WWOParagraphs'>
                                Internet of Things(IOT) technology is increasingly intergratedinto scales,
                                allowing for remote monitoring data analytics and predicative maintenance to reduce 
                                downtime and improve efficiency.
                            </p>
                        </div>
                    </div>

                    <div className='WWOColumns'>
                        <img src={training} alt='AppDevelopment' className='WWOImages'/>
                        <div className='WWOWords'>
                            <h3>Training & Seminars </h3>
                            <p className='WWOParagraphs'>
                                We provide scales user traing services.
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
                   <img src={Esit} alt='Logo' />
                </div>
                <div className='partnersLogo'>
                  <img src={Aclas} alt='Logo' />
                </div>
                <div className='partnersLogo'>
                   <img src={Tscale} alt='Logo' />
                </div>
                <div className='partnersLogo'>
                    <img src={Keli} alt='Logo' />
                </div>
                <div className='partnersLogo'>
                    <img src={Zemic} alt='Logo' />
                </div>
            </div>
        </div>

        

        {/**Footer */}
        <Footer />

    </div>
  )
}
