import ExperienceItems from "./ExperienceItems";
import { experience } from "../../data/experience";
import SectionTitle from "../ui/SectionTitle";

function Experience (){
    return(
        <section 
            id="experience"
            className="py-16 sm:py-20 lg:py-24"
        >
            <SectionTitle 
                title="Experiencia" 
                subtitle="Mi trayectoria profesional" 
            />
            <div className="mt-12 lg:mt-16">
                <div className="space-y-8 lg:space-y-10">
                    {experience.map((exp) => (
                        <ExperienceItems 
                            key={exp.id}
                            role={exp.role}
                            company={exp.company}
                            period={exp.period}
                            description={exp.description}
                            tech={exp.tech}
                            achievements={exp.achievements}
                            icon={exp.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
};
export default Experience;