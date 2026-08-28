import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ExperienceItems from "../Experience/ExperienceItems";
import { education } from "../../data/education";

function Education(){
    return(
        <section 
            id="education"
            className="py-16 sm:py-20 lg:py-24"
        >
            <Container>
                <SectionTitle 
                    title="Educación" 
                    subtitle="Mi formación académica" 
                />
                <div className="mt-12 lg:mt-16">
                    <div className="space-y-8 lg:space-y-10">
                        {education.map((edu) => (
                            <ExperienceItems 
                                key={edu.id}
                                role={edu.degree}
                                company={edu.institution}
                                period={edu.period}
                                description={edu.description}
                                tech={edu.achievements}
                                achievements={edu.achievements}
                                icon={edu.icon}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Education;