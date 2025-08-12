import Link from "next/link";
import { projects } from "./projects";
import '../../styles/css/aos.css';

export default function ProjectsList() {
  return (
    <div className="section portfolio-section">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="mb-4 section-title" data-aos="fade-right">
              Awesome Work
            </h2>
            <p data-aos="fade-right" data-aos-delay="100">
              We turn ideas into impactful digital experiences.
            </p>
            <p>
              <a href="#">View All Portfolio</a>
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row mb-5 no-gutters">
          {projects.map(({ id, title, subtitle, images, delay }, idx) => (
            <div
              key={id}
              className="col-sm-6 col-md-6 col-lg-6"
              data-aos="fade"
              data-aos-delay={delay ?? (idx % 2 === 0 ? "" : "100")}
            >
              <Link href={`/portfolio/${id}`} className="work-thumb">
                <div className="work-text">
                  <h2>{title}</h2>
                  <p>{subtitle}</p>
                </div>
                <img
                  src={images[0].src}
                  alt={images[0].alt || title}
                  className="img-fluid"
                  style={{ objectFit: "cover", width: "100%", height: "250px" }}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
