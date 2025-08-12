import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Testimonial from "../../components/Testimonial";
import Services from "../../components/Services";
import GetInTouch from "../../components/GetInTouch";
import ProjectsList from "../../components/projects/ProjectsList";
import '../../styles/css/aos.css';

export default function ProjectsSection() {
  return (
    <>
      <Navbar />
      {/* Hero / Banner */}
      <div
        className="slider-item innerp overlay"
        style={{ backgroundImage: "url('/images/hero_projects.png')" }}
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row slider-text align-items-center justify-content-center text-center">
            <div className="col-lg-12 col-sm-12">
              <h1 className="mb-4" data-aos="fade-right">
                Projects
              </h1>
              <p
                className="custom-breadcrumbs"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <a href="/">Home</a> <span className="mx-3">/</span> Projects
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
    <ProjectsList />

      <Services />
      <Testimonial />
      <GetInTouch />
      <Footer />
    </>
  );
}
