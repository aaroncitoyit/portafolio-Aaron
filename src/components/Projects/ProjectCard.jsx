import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import Badge from "../ui/Badge";


function ProjectCard({name, description, image, technologies, github, demo}){
    return(
        <div className="
                bg-(--color-card)
                border
                border-(--color-borde)
                rounded-2xl
                overflow-hidden
                flex
                flex-col
        ">
            <div className="
                    relative
                    h-45
                    sm:h-50
                    bg-(--color-surface)
                    flex
                    items-center
                    justify-center
            ">
                {image ? (
                    <img src={image} alt={name} className="w-full h-full object-cover"/>
                ) : (
                    <FaCode className="text-4xl text-(--color-border)" />
                )}
                
            </div>

        </div>
    );
}
export default ProjectCard;