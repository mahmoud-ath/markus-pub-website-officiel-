// components/Footer.jsx
import '../styles/css/aos.css';

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-4 mb-5">
            <h3 className="mb-4">About Markus Pub</h3>
            <p className="mb-5">
              Ready to take your digital presence to the next level? Contact us today for a free consultation.
            </p>
            <ul className="list-unstyled footer-link d-flex footer-social">
              <li><a href="#" className="p-2"><span className="fa fa-twitter"></span></a></li>
              <li><a href="#" className="p-2"><span className="fa fa-facebook"></span></a></li>
              <li><a href="#" className="p-2"><span className="fa fa-linkedin"></span></a></li>
              <li><a href="#" className="p-2"><span className="fa fa-instagram"></span></a></li>
            </ul>
          </div>

          <div className="col-md-5 mb-5 pl-md-5">
            <div className="mb-5">
              <h3 className="mb-4">Contact Info</h3>
              <ul className="list-unstyled footer-link quick-contact">
                <li className="d-block">
                  <span className="d-block caption">Address:</span>
                  <span>Tanger, Morocco</span>
                </li>
                <li className="d-block">
                  <span className="d-block caption">Telephone:</span>
                  <span>+212 702-842088</span>
                </li>
                <li className="d-block">
                  <span className="d-block caption">Email:</span>
                  <span>tmj.devgroup@protonmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-3 mb-5">
            <h3 className="mb-4">Quick Links</h3>
            <ul className="list-unstyled footer-link">
              <li><a href="#">About</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Disclaimers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-3"></div>
        </div>

        <div className="row">
          <div className="col-12 text-md-center text-left">
            <p className="copyright">
              <small>
                &copy; {new Date().getFullYear()} Markus Pub. All Rights Reserved. Design by{' '}
                <a href="#" target="_blank" rel="noopener noreferrer">markus pub</a>
              </small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
