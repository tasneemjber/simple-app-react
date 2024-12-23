import React from 'react';
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar/Nav.jsx'; 
import Footer from './components/footer/footer.jsx'; 
import Header from './components/header/header.jsx';
import About from './components/about/about.jsx';
import Portfolio from './components/portfolio/portfolio.jsx';
import Contact from './components/conactMe/conactMe.jsx';
import {Route , Routes} from 'react-router-dom';
export default function App() {
  return (
    <>
      <Navbar />
    
      <Routes>
      <Route path='/' element={<Header/>}  ></Route> 
        <Route path='/Portfolio' element={<Portfolio/>}  ></Route>  
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
      <Footer />
     
    </>
  );
}

