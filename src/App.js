import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import { Footer } from './Components/Footer/Footer';
import pre_workout_banner from './Components/Assets/Frontend_Assets/banner_preworkout.webp'
import gainer_banner from './Components/Assets/Frontend_Assets/banner_gainner.jpg'
import fat_burner_banner from './Components/Assets/Frontend_Assets/banner_fatburner.avif'



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop />}/>
          <Route path='/pre_workout' element={<ShopCategory banner={pre_workout_banner} category="pre_workout" />}/>
          <Route path='/gainer' element={<ShopCategory banner={gainer_banner} category="gainer" />}/>
          <Route path='/fat_burner' element={<ShopCategory banner={fat_burner_banner} category="fat_burner" />}/>
          <Route path='product' element={<Product />} >
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
