import './App.css';
import { HomePage } from './Home/HomePage';
import {ContactPage} from './Contact/ContactPage';
import {LoginPage} from './Authentications/LoginPage';
import { SignUpPage } from './Authentications/SignUpPage';
import { Route, Routes } from 'react-router-dom';
import { ProductDetails } from './Home/ProductsDetails';
import { AboutPage } from './About/AboutPage';

function App() {
   return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/contact' element={<ContactPage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/productdetails/:id' element={<ProductDetails />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/signup' element={<SignUpPage />}/>
      </Routes>
    </>
  )
}

export default App
