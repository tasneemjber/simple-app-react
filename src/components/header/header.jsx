import react from 'react'
import avt from '/src/assets/img/avataaars.svg'
import './header.css'
function Header(){
   
  return<header className="masthead bg-primary text-white text-center">
    <div className="container d-flex align-items-center flex-column">
      <img className="masthead-avatar mb-5" src={avt} alt="..." />
      <h1 className="masthead-heading text-uppercase mb-0">Start Bootstrap</h1>
      <div className="divider-custom divider-light">
        <div className="divider-custom-line" />
        <div className="divider-custom-icon"><svg className="svg-inline--fa fa-star" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>{/* <i class="fas fa-star"></i> Font Awesome fontawesome.com */}</div>
        <div className="divider-custom-line" />
      </div>
      <p className="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
    </div>
  </header>


}
export default Header;