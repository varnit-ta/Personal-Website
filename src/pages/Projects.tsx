import '../styles/Projects.css'
import projectList from '../db/projects.json'

const ProjectTabs = ({projectName, projectLink, projectDescription}: {projectName: string, projectLink: string, projectDescription: string}) => {
    return (
        <div className="projectTab">
            <a href={projectLink}><h1>{projectName}</h1></a>
            <p>{projectDescription}</p>
        </div>
    )
}

const Projects = () => {
    return (
        <div className="page projects">
            {
                projectList.map((project, index) => {
                    return (
                        <ProjectTabs
                            projectName={project.projectName}
                            projectLink={project.projectLink}
                            projectDescription={project.projectDescription}
                            key={index}
                        />
                    )
                })
            }
        </div>
    );
}

export default Projects;