
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import projectsData from "./../../projects-data.json";


function ProjectsPage() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(projectsData);
    }, []);

    return (
        <div>
            <h2>Projects</h2>
            {projects.map((project) => {
                return (
                    <div key={project.id} className="project">
                        <h3>{project.name}</h3>
                        <p>{project.technologies}</p>
                        <Link to={`/project/details/${project._id}`}>Ver detalles</Link>
                        <hr />
                    </div>
                );
            })}
        </div>
    );
}

export default ProjectsPage;