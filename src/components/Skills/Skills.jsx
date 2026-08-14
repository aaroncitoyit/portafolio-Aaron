import SkillCategory from "./SkillCategory";

import { skills } from "../../data/skills";


function Skills(){
    return(
       <section id="skills" className="py-16 sm:py-20 lg:py-24">
            <div    
                className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-6
                    sm:gap-8
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
       </section>
    );
}
export default Skills;