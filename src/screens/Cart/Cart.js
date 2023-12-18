import React,{useState} from 'react'
import Header from '../../Components/Header/Header'
import "../HomePage/HomeScreen.css"
import "./Cart.css"
import ProductImage from "../../Assets/weight.jpg"
import cancel from "../../Assets/multiply.png"
import add from "../../Assets/plus.png"
import minus from "../../Assets/minus.png"
import Footer from '../../Components/Footer/Footer'
import { useLocation } from 'react-router-dom'

export default function Cart() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const cart = location.state.cart || [];
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
  

    const openModal = () => {
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };

    const submitForm = (e) => {
        e.preventDefault();
      
        const emailContent = `
          Name: ${name}
          Email: ${email}
          Phone Number: ${phonenumber}
      
          Cart Items:
          ${cart.map(item => `${item.productImage} -ProductName: ${item.productName} - Quantity: ${item.quantity}`).join('\n')}
        `;
      
        const mailtoLink = `mailto:sales@scales-technology.co.ke?subject=Quote Request&body=${encodeURIComponent(emailContent)}`;
      
        // Open user's default email client
        window.location.href = mailtoLink;
      };
      

  return (
    <div className='CartContainer'>
        <Header />
        <div className='CartTitle'>
            <h1>YOUR CART</h1>
            <button onClick={openModal} >Ask for a Quote</button>
            {isOpen && (
                <div className="overlay">
                <div className="modal">
                    <span className="close-btn" onClick={closeModal}>&times;</span>
                    {/* Your modal content goes here */}
                    <h2>YOUR DETAILS</h2>
                    <hr />
                    <input placeholder='Enter Your Name' value={name}  onChange={(e)=> setName(e.target.value)} />
                    <input placeholder='Enter Your Email' value={email}  onChange={(e)=> setEmail(e.target.value)} />
                    <input placeholder='Enter Your PhoneNumber' value={phonenumber}  onChange={(e)=> setPhoneNumber(e.target.value)}  />
                    <h8>Disclaimer:</h8>
                    <p>
                        The quote for the product submitted shall be sent to your email or phonenumber within 24 hours of submission. 
                    </p>
                    <button onClick={submitForm}>Submit</button>
                </div>
                </div>
            )}
        </div>
        <hr />

        <div className='CartProductsContainer'>
        {cart.map((item) => (

            <div className='CartProducts'>
                <img src={item.productImage} alt='cartimageproduct' />
                <div className='cartproductdetails'>
                    <div className='cpdtop'>
                        <h3>{item.ProductName}</h3>
                        <img src={cancel} alt='cancel' />
                    </div>
                    <p>{item.ShortDescription}  </p>
                    <div className='cpdbottom'>
                        <h5>Quantity:</h5>
                        <img src={add} alt='add' />
                        <p>2</p>
                        <img src={minus} alt='minus' />
                    </div>
                </div>
            </div>
             ))}


        </div>

        <Footer />
       
      
    </div>
  )
}
