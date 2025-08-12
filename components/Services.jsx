// components/Services.jsx
import '../styles/css/aos.css';

export default function Services() {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 text-center" data-aos="fade-up" data-aos-delay="">
            <div className="service">
              <span className="icon icon-screen-desktop mb-4 d-block"></span>
              <h3>Website Design & Development</h3>
              <p>
                We build responsive, high-performance websites that tell your story and convert visitors into customers. From landing pages to full business sites — design, code, and SEO included.
              </p>
            </div>
          </div>

          <div className="col-lg-4 mb-4 text-center" data-aos="fade-up" data-aos-delay="100">
            <div className="service">
              <span className="icon icon-rocket mb-4 d-block"></span>
              <h3>SaaS Product Development</h3>
              <p>
                We specialize in scalable SaaS platforms and internal tools. From backend systems to frontend UI, we deliver secure, cloud-ready apps that grow with your business.
              </p>
            </div>
          </div>

          <div className="col-lg-4 mb-4 text-center" data-aos="fade-up" data-aos-delay="200">
            <div className="service">
              <span className="icon icon-magnet mb-4 d-block"></span>
              <h3>Creative Design & Branding</h3>
              <p>
                We craft modern digital experiences — from brand identity and logo design to user interface systems that feel intuitive, engaging, and aligned with your business goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
