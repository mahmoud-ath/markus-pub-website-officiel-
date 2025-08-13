// app/page.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import AboutUs from "../components/AboutUs";
import GetInTouch from "../components/GetInTouch";
import "../styles/css/aos.css";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div
        className="slider-item overlay"
        data-stellar-background-ratio="0.5"
        style={{ backgroundImage: "url('/images/hero_2.jpg')" }}
      >
        <div className="container">
          <div className="row slider-text align-items-center justify-content-center">
            <div className="col-lg-12 text-center col-sm-12">
              <p
                data-aos-easing="slide-up"
                data-aos-duration="800"
                data-aos-delay="0"
                data-new-gr-c-s-check-loaded="14.1248.0"
                data-gr-ext-installed=""
              >
                Build Smarter, Launch Faster, Grow Bigger
              </p>
              <h1
                className="mb-4"
                data-aos-easing="slide-up"
                data-aos-duration="800"
                data-aos-delay="0"
                data-new-gr-c-s-check-loaded="14.1248.0"
                data-gr-ext-installed=""
              >
                We create awesome stuff.
              </h1>
              <div
                className="btn-play-wrap mx-auto"
                data-aos-easing="slide-up"
                data-aos-duration="800"
                data-aos-delay="0"
              >
                <Link href="/our_services" className="btn-play">
                  <span className="ion ion-ios-play"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Portfolio />
      <AboutUs />
      <Services />
      <Testimonial />
      <GetInTouch />

      <Footer />
    </>
  );
}
