import ProjectCard from "./ProjectCard";
import SectionTitle from "../ui/SectionTitle";
import Container from "../ui/Container";
import { projects } from "../../data/projects";

function Projects(){
    return(
        <section id="projects" className="py-16 sm:py-20 lg:py-24">
            <Container>
                <SectionTitle 
                    title="Proyectos" 
                    subtitle="Algunos de mis trabajos"
                />
                <div className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-3
                    gap-6
                    sm:gap-8
                    mt-12 lg:mt-16
                ">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}

                </div>
            </Container>
        </section>
    );
}

export default Projects;