import './App.css';
import { HomePage } from './HomePage/HomePage';
import {ContactPage} from './ContactPage/ContactPage';
import { Route, Routes } from 'react-router-dom';
import { ProductDetails } from './HomePage/ProductsDetails';

function App() {
   return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/contact' element={<ContactPage />}/>
        <Route path='/productdetails/:id' element={<ProductDetails />}/>
      </Routes>
    </>
  )
}

export default App
