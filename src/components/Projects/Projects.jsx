import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

function Projects(){
    return(
        <section id="projects" className="py-16 sm:py-20 lg:py-24">
            <div className="
                grid
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3
                gap-6
                sm:gap-8
            ">
                {projects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}

            </div>
          
        </section>
    );
}

export default Projects;