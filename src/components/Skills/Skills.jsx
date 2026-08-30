import SkillCategory from "./SkillCategory";
import SectionTitle from "../ui/SectionTitle";
import Container from "../ui/Container";

import { skills } from "../../data/skills";


function Skills(){
    return(
        <section id="skills" className="py-16 sm:py-20 lg:py-24">
            <Container>
                <SectionTitle 
                    title="Habilidades" 
                    subtitle="Tecnologías que domino"
                />
                <div    
                    className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        gap-6
                        sm:gap-8
                        mt-12 lg:mt-16
                        items-stretch
                ">
                    {skills.map((category) => (
                    
                        <SkillCategory 
                            key={category.id}
                            icon={category.icon}
                            title={category.title}
                            description={category.description}
                            items={category.items}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}
export default Skills;