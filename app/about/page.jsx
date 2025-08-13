import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonial";
import GetInTouch from "@/components/GetInTouch";
import "../../styles/css/aos.css";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero / Banner Section */}
      <div
        className="slider-item overlay"
        style={{ backgroundImage: "url('/images/hero_about.jpg')" }}
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row slider-text align-items-center justify-content-center text-center">
            <div className="col-lg-12 col-sm-12">
              <h1 className="mb-4" data-aos="fade-up">
                About Us
              </h1>
              <p
                className="custom-breadcrumbs"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <a href="/">Home</a> <span className="mx-3">/</span> About
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Sections */}
      <div className="section">
        <div className="container">
          {/* Creativity */}
          <div className="row align-items-center">
            <div
              className="col-md-6 order-md-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <figure className="img-dotted-bg">
                <img
                  src="/images/about_dna.jpg"
                  alt="Creativity"
                  className="img-fluid"
                />
              </figure>
            </div>
            <div className="col-md-5 mr-auto" data-aos="fade-up">
              <h2 className="mb-4 section-title">
                <strong>Creativity</strong> is our DNA
              </h2>
              <p>
                ✨ At Markus Pub, we're united by a clear mission: to help teams
                organize and deliver their projects with clarity and confidence.
                Born from experience in digital product planning, we built a
                tool that transforms complexity into simplicity — so teams can
                focus on what matters: delivering value.
              </p>
            </div>
          </div>

          {/* Our Mission */}
          <div className="row align-items-center mt-5">
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
              <figure className="img-dotted-bg">
                <img
                  src="/images/about_mission.jpg"
                  alt="Our Mission"
                  className="img-fluid"
                />
              </figure>
            </div>
            <div className="col-md-5 mr-auto order-md-2" data-aos="fade-up">
              <h2 className="mb-4 section-title">
                <strong>Our Mission</strong>
              </h2>
              <p>
                🚀 We believe every project deserves a clear path forward.
                Markus Pub empowers teams with intuitive dashboards,
                collaborative workflows, and real-time insights—all in one
                web-based platform.
              </p>
            </div>
          </div>

          {/* The Problem We Solve */}
          <div className="row align-items-center mt-5">
            <div
              className="col-md-6 order-md-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <figure className="img-dotted-bg">
                <img
                  src="/images/about_problem.jpg"
                  alt="The Problem We Solve"
                  className="img-fluid"
                />
              </figure>
            </div>
            <div className="col-md-5 mr-auto" data-aos="fade-up">
              <h2 className="mb-4 section-title">
                <strong>The Problem We Solve</strong>
              </h2>
              <p>
                🌍 Teams often juggle scattered tools, missed deadlines, and
                misaligned communication. Markus Pub centralizes project
                planning, tasks, calendars, and feedback—so nothing slips
                through the cracks and everyone stays in sync.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="section">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-8 text-center" data-aos="fade-up">
              <h2 className="mb-4 section-title">
                Meet Our <strong>Team</strong>
              </h2>
            </div>
          </div>
          <div className="row">
            {/* Team members */}
            {[
              [
                {
                  name: "Mahmoud El Gharib",
                  desc: "Creative strategist and marketing innovator, turning brand visions into impactful campaigns that drive measurable results.",
                  img: "/images/person_1.jpg",
                },
                {
                  name: "Anas Taryous",
                  desc: "Digital content specialist with a passion for crafting engaging stories and experiences that connect brands with their audience.",
                  img: "/images/person_1.jpg",
                },
                {
                  name: "Farouk El Ouassif",
                  desc: "Tech-driven marketer and data analyst, leveraging insights to optimize campaigns and maximize business growth.",
                  img: "/images/person_1.jpg",
                },
              ],
            ].map(({ name, desc, img }, idx) => (
              <div
                className="col-lg-4"
                key={idx}
                data-aos="fade-up"
                data-aos-delay={100 + idx * 100}
              >
                <div className="media d-block media-custom text-center">
                  <a href="#">
                    <img src={img} alt={name} className="img-fluid" />
                  </a>
                  <div className="media-body">
                    <h3 className="mt-0 text-black">{name}</h3>
                    <p>{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reuse Testimonial component */}
      <Testimonial />

      {/* Reuse GetInTouch component */}
      <GetInTouch />

      <Footer />
    </>
  );
}
