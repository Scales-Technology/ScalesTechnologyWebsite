import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomeScreen from './screens/HomePage/HomeScreen';
import OurProducts from './screens/OurProducts/OurProducts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={< HomeScreen />} />
        <Route path='/ourproducts' element={< OurProducts />} />
      </Routes>
    </Router>
  );
}

export default App;
