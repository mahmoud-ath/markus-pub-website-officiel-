// components/Portfolio.jsx
import '../styles/css/aos.css';

export default function Portfolio() {
  return (
    <div className="section portfolio-section">
      <div className="container">
        <div className="row mb-5 justify-content-center" data-aos="fade-up">
          <div className="col-md-8 text-center">
            <h2 className="mb-4 section-title">Latest Work</h2>
            <p><strong>We design, build, and launch software platforms, websites, and brands that drive results.</strong></p>
            <p>From intuitive dashboards to stunning web presence, our latest projects show the power of purposeful design and smart development.</p>
            <p><a href="/portfolio">View All Portfolio</a></p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row mb-5 no-gutters">
          <div className="col-sm-6 col-md-6 col-lg-6" data-aos="fade" data-aos-delay="">
            <a href="/portfolio/tech-horizon" className="work-thumb">
              <div className="work-text">
                <h2>Tech Horizon</h2>
                <p>Web Development</p>
              </div>
              <img src="/images/tech_horizon.jpg" alt="Tech Horizon" className="img-fluid" />
            </a>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6" data-aos="fade" data-aos-delay="100">
            <a href="/portfolio/morocco-accident-analysis" className="work-thumb">
              <div className="work-text">
                <h2>Data Visualization & analytics</h2>
                <p>Saas Product</p>
              </div>
              <img src="/images/Data_visualization.jpg" alt="Data Visualization" className="img-fluid" />
            </a>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6" data-aos="fade" data-aos-delay="">
            <a href="/portfolio/stock-master-pro" className="work-thumb">
              <div className="work-text">
                <h2>Stock Master Pro</h2>
                <p>CRM & Management & SaaS</p>
              </div>
              <img src="/images/task.jpg" alt="Stock Master Pro" className="img-fluid" />
            </a>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6" data-aos="fade" data-aos-delay="100">
            <a href="/portfolio/voyages" className="work-thumb">
              <div className="work-text">
                <h2>voyages Elegant</h2>
                <p>E-commerce Website</p>
              </div>
              <img src="/images/voyages.jpg" alt="voyages Elegant" className="img-fluid" />
            </a>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 text-center">
            <p data-aos="fade-up" data-aos-delay="">
              <a href="/portfolio" className="btn btn-outline-white px-4 py-3">More Projects</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
