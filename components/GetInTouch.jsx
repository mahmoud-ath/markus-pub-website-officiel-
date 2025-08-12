// components/GetInTouch.jsx
import '../styles/css/aos.css';

export default function GetInTouch() {
  return (
    <div className="bg-primary py-5">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <h3 className="text-white mb-2 font-weight-normal" data-aos="fade-right" data-aos-delay="">
              Let's do more together
            </h3>
            <p className="text-white mb-4" data-aos="fade-right" data-aos-delay="100">
              Ready to take your digital presence to the next level? Contact us today for a free consultation.
            </p>
            <p className="mb-0" data-aos="fade-right" data-aos-delay="200">
              <a href="/contact" className="btn btn-outline-white px-4 py-3">Get In Touch!</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
