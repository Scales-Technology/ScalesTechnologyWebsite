import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import "./ContactUs.css"
import Footer from '../../Components/Footer/Footer'


export default function ContactUs() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleSendMail = () => {
    const mailtoLink = 'mailto:sales@scales-technology.co.ke?subject=New Message from Rekebisha App&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(description)}';
    window.location.href = mailtoLink;
  }

  return (
    <div className='contactusContainer'>
        <Header />
        <div className='contactusbody'>
            <div className='contactuscard'>
                <div className='contactusform'>
                    <h2>Contact Us</h2>
                    <input placeholder='Name' value={name} onChange={(e)=> setName(e.target.value)} />
                    <input placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} />
                    <textarea placeholder='Inform us...' value={description} onChange={(e)=> setDescription(e.target.value)}  />
                    <button onClick={handleSendMail}>Submit</button>
                </div>
                <div className='contactusimage'>

                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
