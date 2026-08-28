import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import Badge from "../ui/Badge";


function ProjectCard({name, description, image, technologies, github, demo}){
    return(
        <div className="
                bg-(--color-card)
                border
                border-(--color-border)
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
            <div className="
                    absolute
                    top-3
                    left-3
                    sm:top-4
                    sm:left-4
                    w-9 h-9
                    sm:w-10 sm:h-10
                    rounded-full
                    bg-(--color-card)
                    border
                    border-(--color-border)
                    flex
                    items-center
                    justify-center
                    text-(--color-primary)
            
            ">
                <FaCode className="text-sm sm:text-base"/>
            </div>
            </div>

            <div className="
                    p-5
                    sm:p-6
                    flex
                    flex-col
                    gap-4
                    flex-1
            ">
                <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-(--color-title) mb-2">
                        {name}
                    </h3>
                    <p className="text-sm text-(--color-text) leading-relaxed">
                        {description}
                    </p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((t) => (
                        <Badge key={t} >{t}</Badge>
                   ))}
                </div>
                <div className="flex gap-3 mt-auto pt-2">
                    <a 
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                        flex-1
                        flex
                        items-center
                        justify-center
                        gap-2
                        h-11
                        rounded-lg
                        border
                        border-(--color-border)
                        text-(--color-text)
                        text-sm
                        font-medium
                        hover:bg-(--color-surface)
                        transition-colors
                        "
                    >
                        <FaGithub />
                        Github
                    </a>
                    <a 
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                        flex-1
                        flex
                        items-center
                        justify-center
                        gap-2
                        h-11
                        rounded-lg
                        bg-(--color-primary)
                      text-white
                        text-sm
                        font-medium
                        hover:opacity-90
                        transition-opacity
                    
                    ">
                        Ver demo
                        <FaExternalLinkAlt className="text-xs"/>

                    </a>
                </div>

            </div>

        </div>
    );
}
export default ProjectCard;