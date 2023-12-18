import React,{useState, useEffect} from 'react';
import Header from '../../Components/Header/Header';
import "../HomePage/HomeScreen.css";
import "./OurProducts.css";
import productImage from "../../Assets/weight.jpg";
import {Link, useNavigate} from "react-router-dom";
import Footer from '../../Components/Footer/Footer';
import { db } from '../../Database/config';
import { MdAddChart } from 'react-icons/md';


export default function OurProducts() {

    
    const [isOpen, setIsOpen] = useState(false);
    const [weighscales, setWeighScales] = useState([]);
    const [weighbridge, setWeighBridge] = useState([]);
    const [accessories, setAccessories] = useState([]);
    const [officecomputing, setOfficeComputing] = useState([]);
    const [subscription, setSubscription] = useState([]);
    const [pos, setPOS] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const navigate = useNavigate();
    const [selectedSubcategory, setSelectedSubcategory] = useState('All'); // Default to show all products
    const [selectedweighscalesSubcategory, setSelectedWeighScalesSubcategory] = useState('All');
    const [selectedweighbridgeSubcategory, setSelectedWeighBridgeSubcategory] = useState('All');
    const [selectedaccessoriesSubcategory, setSelectedAccessoriesSubcategory] = useState('All');
    const [selectedposSubcategory, setSelectedPosSubcategory] = useState('All');
    const [selectedsubscriptionsSubcategory, setSelectedSubscriptionsSubcategory] = useState('All');
    const [cart, setCart] = useState([]);



    const handleSubcategoryChange = (subcategory) => {
      setSelectedSubcategory(subcategory);
    };

    const handleWeighScalesSubcategoryChange = (subcategory) => {
        setSelectedWeighScalesSubcategory(subcategory);
      };
      const handleWeighBridgeSubcategoryChange = (subcategory) => {
        setSelectedWeighBridgeSubcategory(subcategory);
      };
      const handleAccessoresSubcategoryChange = (subcategory) => {
        setSelectedAccessoriesSubcategory(subcategory);
      };
      const handlePosSubcategoryChange = (subcategory) => {
        setSelectedPosSubcategory(subcategory);
      };
      const handleSubscriptionSubcategoryChange = (subcategory) => {
        setSelectedSubscriptionsSubcategory(subcategory);
      };
  
    const filteredProducts = officecomputing.filter(
      (product) => selectedSubcategory === 'All' || product.SubCategory === selectedSubcategory
    );

    const weighscalesfilteredProducts = weighscales.filter(
        (product) => selectedweighscalesSubcategory === 'All' || product.SubCategory === selectedweighscalesSubcategory
      );

      const weighbridgefilteredProducts = weighbridge.filter(
        (product) => selectedweighbridgeSubcategory === 'All' || product.SubCategory === selectedweighbridgeSubcategory
      );
      const accessoriesfilteredProducts = accessories.filter(
        (product) => selectedaccessoriesSubcategory === 'All' || product.SubCategory === selectedaccessoriesSubcategory
      );
      const posfilteredProducts = pos.filter(
        (product) => selectedposSubcategory === 'All' || product.SubCategory === selectedposSubcategory
      );
      const subscriptionfilteredProducts = subscription.filter(
        (product) => selectedsubscriptionsSubcategory === 'All' || product.SubCategory === selectedsubscriptionsSubcategory
      );



    const handleButtonClick = () => {
        // Navigate to the '/about' route
        navigate('/cart');
      };


      const openModal = (product) => {
        setSelectedProduct(product);
        setIsOpen(true);
      };
  
      const closeModal = () => {
        setSelectedProduct(null);
        setIsOpen(false);
      };

     // Fetch data from the 'products' collection
     useEffect(() => {
     const fetchData = async () => {
        const snapshot = await db.collection('Products').where('MainCategory', '==', 'Weighing Sclaes').get();
        const productsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setWeighScales(productsData);
      };

      const fetchData2 = async () => {
        const snapshot = await db.collection('Products').where('MainCategory', '==', 'Weigh Bridge').get();
        const productsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setWeighBridge(productsData);
      };

      const fetchData3 = async () => {
        const snapshot = await db.collection('Products').where('MainCategory', '==', 'Accessories').get();
        const productsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setAccessories(productsData);
      };

      const fetchData4 = async () => {
        const snapshot = await db.collection('Products').where('MainCategory', '==', 'POS&Accessories').get();
        const productsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPOS(productsData);
      };

      const fetchData5= async () => {
        const snapshot = await db.collection('Products').where('MainCategory', '==', 'Office Computing').get();
        const productsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setOfficeComputing(productsData);
      };
      const fetchData6= async () => {
        const snapshot = await db.collection('Products').where('MainCategory', '==', 'Subscription').get();
        const productsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setSubscription(productsData);
      };


      fetchData();
      fetchData2();
      fetchData3();
      fetchData4();
      fetchData5();
      fetchData6();
    }, []);
    // Assuming you have an array of unique subcategories
const uniqueSubcategories = [...new Set(officecomputing.map(product => product.SubCategory))];

const uniqueweighscalesSubcategories = [...new Set(weighscales.map(product => product.SubCategory))];

const uniqueweighbridgesSubcategories = [...new Set(weighbridge.map(product => product.SubCategory))];

const uniqueaccessoriesSubcategories = [...new Set(accessories.map(product => product.SubCategory))];

const uniqueposSubcategories = [...new Set(pos.map(product => product.SubCategory))];

const uniquesubscriptionSubcategories = [...new Set(subscription.map(product => product.SubCategory))];

const addCart = (product) => {
  // Add the selected product to the cart
  setCart((prevCart) => [...prevCart, product]);
}
const handleCartButtonClick = () => {
  // Navigate to the cart page and pass the cart state as a prop
  navigate('/cart', { state: { cart } });
};


  return (
    <div className='OurProductsContainer'>

        <Header />

        <div className='productsheader'>
            <h1>OUR PRODUCTS</h1>
            
        </div>
        <button onClick={handleCartButtonClick}>View Cart</button>

        {isOpen && selectedProduct && (
                <div className="overlay">
                <div className="modal">
                    <span className="close-btn" onClick={closeModal}>&times;</span>
                    {/* Your modal content goes here */}
                    <div className="modal-content">

                    <h3>{selectedProduct.ProductName}</h3>
                    <hr />
                    <h5>Product Specification:</h5>
                    <p>{selectedProduct.ShortDescription}</p>
                    <h5>Product Description:</h5>
                    <p>{selectedProduct.FullDescription}</p>
                    </div>
                </div>
                </div>
            )}

<div className='ProductsCategory'>
            <h3>Weighing Scales</h3>
            <hr />
            <div>
                {/* Dropdown for subcategories */}
                <label htmlFor='subcategory'>Select Subcategory:</label>
                <select
                id='subcategory'
                name='subcategory'
                onChange={(e) => handleWeighScalesSubcategoryChange(e.target.value)}
                value={selectedweighscalesSubcategory}
                >
                <option value='All'>All</option>
                {uniqueweighscalesSubcategories.map((subcategory) => (
                    <option key={subcategory} value={subcategory}>
                    {subcategory}
                    </option>
                ))}
                </select>
            </div>
            <div className='productsCardContainer'>
                {weighscalesfilteredProducts.map((product) => (
                <div key={product.id}  className='productsCard'>
                    <img onClick={() => openModal(product)} src={product.productImage} alt='productimage' />
                    <h6>{product.ProductName}</h6>
                    <p>{product.SubCategory}</p>
                    <button onClick={() => addCart(product)}>Add to Cart</button>
                </div>
                ))}
            </div>
            </div>

       
            <div className='ProductsCategory'>
            <h3>WeighBridges</h3>
            <hr />
            <div>
                {/* Dropdown for subcategories */}
                <label htmlFor='subcategory'>Select Subcategory:</label>
                <select
                id='subcategory'
                name='subcategory'
                onChange={(e) => handleWeighBridgeSubcategoryChange(e.target.value)}
                value={selectedweighbridgeSubcategory}
                >
                <option value='All'>All</option>
                {uniqueweighbridgesSubcategories.map((subcategory) => (
                    <option key={subcategory} value={subcategory}>
                    {subcategory}
                    </option>
                ))}
                </select>
            </div>
            <div className='productsCardContainer'>
                {weighbridgefilteredProducts.map((product) => (
                <div key={product.id} className='productsCard'>
                    <img onClick={() => openModal(product)} rc={product.productImage} alt='productimage' />
                    <h6>{product.ProductName}</h6>
                    <p>{product.SubCategory}</p>
                    <button onClick={() => addCart(product)}>Add to Cart</button>
                </div>
                ))}
            </div>
            </div>


            <div className='ProductsCategory'>
            <h3>Accessories</h3>
            <hr />
            <div>
                {/* Dropdown for subcategories */}
                <label htmlFor='subcategory'>Select Subcategory:</label>
                <select
                id='subcategory'
                name='subcategory'
                onChange={(e) => handleAccessoresSubcategoryChange(e.target.value)}
                value={selectedaccessoriesSubcategory}
                >
                <option value='All'>All</option>
                {uniqueaccessoriesSubcategories.map((subcategory) => (
                    <option key={subcategory} value={subcategory}>
                    {subcategory}
                    </option>
                ))}
                </select>
            </div>
            <div className='productsCardContainer'>
                {accessoriesfilteredProducts.map((product) => (
                <div key={product.id} className='productsCard'>
                    <img onClick={() => openModal(product)} src={product.productImage} alt='productimage' />
                    <h6>{product.ProductName}</h6>
                    <p>{product.SubCategory}</p>
                    <button onClick={() => addCart(product)}>Add to Cart</button>
                </div>
                ))}
            </div>
            </div>

            <div className='ProductsCategory'>
            <h3>POS & Software</h3>
            <hr />
            <div>
                {/* Dropdown for subcategories */}
                <label htmlFor='subcategory'>Select Subcategory:</label>
                <select
                id='subcategory'
                name='subcategory'
                onChange={(e) => handlePosSubcategoryChange(e.target.value)}
                value={selectedposSubcategory}
                >
                <option value='All'>All</option>
                {uniqueposSubcategories.map((subcategory) => (
                    <option key={subcategory} value={subcategory}>
                    {subcategory}
                    </option>
                ))}
                </select>
            </div>
            <div className='productsCardContainer'>
                {posfilteredProducts.map((product) => (
                <div key={product.id} className='productsCard'>
                    <img onClick={() => openModal(product)} src={product.productImage} alt='productimage' />
                    <h6>{product.ProductName}</h6>
                    <p>{product.SubCategory}</p>
                    <button onClick={() => addCart(product)}>Add to Cart</button>
                </div>
                ))}
            </div>
            </div>

        <div className='ProductsCategory'>
            <h3>Office Computing</h3>
            <hr />
            <div>
                {/* Dropdown for subcategories */}
                <label htmlFor='subcategory'>Select Subcategory:</label>
                <select
                id='subcategory'
                name='subcategory'
                onChange={(e) => handleSubcategoryChange(e.target.value)}
                value={selectedSubcategory}
                >
                <option value='All'>All</option>
                {uniqueSubcategories.map((subcategory) => (
                    <option key={subcategory} value={subcategory}>
                    {subcategory}
                    </option>
                ))}
                </select>
            </div>
            <div className='productsCardContainer'>
                {filteredProducts.map((product) => (
                <div key={product.id} className='productsCard'>
                    <img onClick={() => openModal(product)} src={product.productImage} alt='productimage' />
                    <h6>{product.ProductName}</h6>
                    <p>{product.SubCategory}</p>
                    <button onClick={() => addCart(product)}>Add to Cart</button>
                </div>
                ))}
            </div>
            </div>

            <div className='ProductsCategory'>
            <h3>Subscriptions</h3>
            <hr />
            <div>
                {/* Dropdown for subcategories */}
                <label htmlFor='subcategory'>Select Subcategory:</label>
                <select
                id='subcategory'
                name='subcategory'
                onChange={(e) => handleSubscriptionSubcategoryChange(e.target.value)}
                value={selectedsubscriptionsSubcategory}
                >
                <option value='All'>All</option>
                {uniquesubscriptionSubcategories.map((subcategory) => (
                    <option key={subcategory} value={subcategory}>
                    {subcategory}
                    </option>
                ))}
                </select>
            </div>
            <div className='productsCardContainer'>
                {subscriptionfilteredProducts.map((product) => (
                <div key={product.id} className='productsCard'>
                    <img onClick={() => openModal(product)} src={product.productImage} alt='productimage' />
                    <h6>{product.ProductName}</h6>
                    <p>{product.SubCategory}</p>
                    <button onClick={() => addCart(product)}>Add to Cart</button>
                </div>
                ))}
            </div>
            </div>


        

        <Footer />

    </div>
  )
}
