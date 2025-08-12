// components/AboutUs.jsx
import '../styles/css/aos.css';

export default function AboutUs() {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 ml-auto mb-5 order-2">
            <span className="d-block text-uppercase text-primary">Who We Are</span>
            <h2 className="mb-4 section-title">Do Things That Matters. Plan. Create. Grow.</h2>
            <p>
              At Markus Pub, we're united by a clear mission: to help teams organize and deliver their projects 
              with clarity and confidence. Born from experience in digital product planning, we built a tool that 
              transforms complexity into simplicity — so teams can focus on what matters: delivering value.
            </p>
            <p className="mb-5">
              Ready to take your digital presence to the next level? Contact us today for a free consultation.
            </p>
            <p>
              <a href="/contact" className="btn btn-outline-black">Contact us</a>
            </p>
          </div>
          <div className="col-lg-6 order-1">
            <figure className="img-dotted-bg">
              <img src="/images/about_1.jpg" alt="About Markus Pub" className="img-fluid" />
              <img src="/images/work_1.jpg" alt="Work sample" className="img-fluid img-absolute" data-aos="fade-left" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
