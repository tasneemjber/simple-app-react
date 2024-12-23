import React from 'react';
import Navbar from './components/Navbar/Nav.jsx'; 
import Footer from './components/footer/footer.jsx'; 
import Header from './components/header/header.jsx';
import About from './components/about/about.jsx';
import Portfolio from './components/portfolio/portfolio.jsx';
import Conact from './components/conactMe/conactMe.jsx'
function App() {
  return (
    <div>
      <Navbar />
      <Header/>
      <Portfolio/>
      <About/>
      <Conact/>
      <Footer />
     
    </div>
  );
}

export default App;