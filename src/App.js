import logo from './logo.svg';
import './App.css';
import HomeScreen from './screens/HomePage/HomeScreen';
import OurProducts from './screens/OurProducts/OurProducts';
import Cart from './screens/Cart/Cart';
import AboutUs from './screens/AboutUS/AboutUs';
import ContactUs from './screens/ContactUs/ContactUs'; 
import RepairAndServices from './screens/RepairAndServices/RepairAndServices';
import Map from './screens/Location/Location';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={< HomeScreen />} />
        <Route path='/ourproducts' element={< OurProducts />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/repairandservices' element={<RepairAndServices />} />
        <Route path="/location" element={<Map />} />
      </Routes>
      
    </Router>
  );
}

export default App;
