"use client";
import "../../styles/css/aos.css";

export default function ProjectsDetails({ project }) {
  return (
    <div className="section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-7">
            {project.video ? (
              <a
                href={project.video.src}
                className="mb-3 d-block video-container"
                data-fancybox="gal"
              >
                <div className="video-wrapper">
                  <video
                    src={project.video.src}
                    alt={project.video.alt}
                    className="img-fluid custom-video"
                    controls
                  />
                  <div className="play-icon">
                    <i className="fa fa-play"></i>
                  </div>
                </div>
              </a>
            ) : null}

            {project.images &&
              project.images.map((img, i) => (
                <a
                  href={img.src}
                  className={`mb-3 d-block${
                    i === project.images.length - 1 ? "" : " mb-3"
                  }`}
                  key={img.src}
                  data-fancybox="gal"
                >
                  <img src={img.src} alt={img.alt} className="img-fluid" />
                </a>
              ))}
          </div>

          <div className="col-lg-4 ml-auto">
            <div className="block-fixed">
              <h3 className="mb-4">Project Details</h3>
              {project.description &&
                project.description.map((desc, i) => <p key={i}>{desc}</p>)}
              <ul className="list-unstyled mb-5">
                <li className="mb-3">
                  <strong className="d-block text-black">Role:</strong>
                  {project.role}
                </li>
                <li>
                  <strong className="d-block text-black">Client:</strong>
                  {project.client}
                </li>
                <li>
                  <strong className="d-block text-black">Technologies:</strong>
                  {project.technologies}
                </li>
                <li>
                  <strong className="d-block text-black">Duration:</strong>
                  {project.duration}
                </li>
              </ul>
              {project.projectUrl && (
                <p>
                  <a
                    href={project.projectUrl}
                    {...(project.projectUrl.match(/\.(mp4|webm|jpg|png|jpeg)$/)
                      ? { "data-fancybox": "gal" }
                      : { target: "_blank", rel: "noopener noreferrer" })}
                    className="btn btn-outline-black"
                  >
                    View Project
                  </a>
                </p>
              )}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
