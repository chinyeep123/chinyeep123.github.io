import "./Projects.css";
import parse from 'html-react-parser'

function ProjectCard(
    {projectName,
    projectDescription,
    imageUrl,
    projectUrl}) {
  return (
    <div className="project-card">
        <div className="image-container">
            <a href={projectUrl}
                className="project-external-link"
                target="_blank" rel="noreferrer"
                >
                <img src={imageUrl} 
                    alt={projectName}
                    className="project-image"
                    loading="lazy"
                    />
            </a>
        </div>
        <div className="project-details-container">
        <h2 className="project-heading">
            {projectName}
        </h2>
        <p className="project-details">
            { parse(projectDescription) }
        </p>
        <a href={projectUrl}
            className="project-live-link"
            target="_blank" rel="noreferrer">
            View live
        </a>
        </div>
    </div>
  )
}

export default ProjectCard