import ProjectsDetails from '../../../components/projects/ProjectsDetails'; // adjust path
import { projects } from '../../../components/projects/projects';
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Testimonial from "../../../components/Testimonial";
import '../../../styles/css/aos.css';

import GetInTouch from "../../../components/GetInTouch";

export default function ProjectPage({ params }) {
  // params.id is a string like 'tech-horizon'
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    return <div>Project Not Found</div>; // or use notFound()
  }

  return (
  <>
      <Navbar />
      {/* Hero / Banner */}
      <div
        className="slider-item innerp overlay"
        style={{ backgroundImage: "url('/images/hero_2.jpg')" }}
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
    <ProjectsDetails project={project} />;

     
      <Testimonial />
      <GetInTouch />
      <Footer />
    </>
  );
}