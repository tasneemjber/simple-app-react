import cabinImg from '/src/assets/img/Portfolioimg/cabin.png';
import cakeImg from '/src/assets/img/Portfolioimg/cake.png';
import circusImg from '/src/assets/img/Portfolioimg/circus.png';
import gameImg from '/src/assets/img/Portfolioimg/game.png';
import safeImg from '/src/assets/img/Portfolioimg/safe.png';
import submarineImg from '/src/assets/img/Portfolioimg/submarine.png';
import './portfolio.css'

function Portfolio() {
    return (
        <section className="page-section portfolio" id="portfolio">
               <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
            <div className="container">

                <div className="row justify-content-center">
          
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item">
                            <img className="img-fluid" src={cabinImg} alt="Portfolio Item 1" />
                        </div>
                    </div>
                
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item">
                            <img className="img-fluid" src={cakeImg} alt="Portfolio Item 2" />
                        </div>
                    </div>
                 
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item">
                            <img className="img-fluid" src={circusImg} alt="Portfolio Item 3" />
                        </div>
                    </div>
                 
                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <div className="portfolio-item">
                            <img className="img-fluid" src={gameImg} alt="Portfolio Item 4" />
                        </div>
                    </div>
                
                    <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <div className="portfolio-item">
                            <img className="img-fluid" src={safeImg} alt="Portfolio Item 5" />
                        </div>
                    </div>
                   
                    <div className="col-md-6 col-lg-4">
                        <div className="portfolio-item">
                            <img className="img-fluid" src={submarineImg} alt="Portfolio Item 6" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
