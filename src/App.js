import Navbar from './component/Vavbar';
import Slider from './component/Slider';
import About from './component/About';
import ProductDetails from './component/ProductDetails';
//import logo from './logo.svg';
import ProductList from './component/ProductsList';
//import './App.css';
import { Routes , Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
          <Slider />
          <ProductList />
          </>
        } />
        <Route path='about' element={<About />} />
        <Route path='product/:productId' element={<ProductDetails />} />

      </Routes>
      
    
    </div>
  );
}

export default App;
