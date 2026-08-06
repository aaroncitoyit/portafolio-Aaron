import StatsCard from "./StatsCard";

function AboutContent(){
    return(
        <div className="space-y-8">
            <h3 
                className="
                    text-3x1
                    font-medium
                    md:text-[clam(1.5rem,2vw+1rem,1.5rem)]
                    text-(--color-title)
                    leading-snug
                    mb-6
                ">
                    Convierto ideas en productos digitales escalables.
            </h3>

            <p 
                className="
                    text-(--color-text)
                    leading-relaxed
                    mb-4
                ">
                    Soy egresado de la carrera de Desarrollo de Software y me especializo
                    en el desarrollo de aplicaciones web utilizando Tecnologias como
                    <span className="text-sky-400 font-medium"> Java </span>,
                    <span className="text-sky-400 font-medium"> Spring Boot </span>,
                    <span className="text-sky-400 font-medium"> Laravel </span> y 
                    <span className="text-sky-400 font-medium"> React </span>.
            </p>
            <p 
                className="
                    text-(--color-text)
                    leading-relaxed 
                    mb-4
                    
                ">
                    Me gusta construir proyectos modernos siguiendo buenas prácticas de
                    desarrollo, priorizando el rendimiento, la escalabilidad y una excelente
                    experiencia de usuario.
            </p>
            <p 
                className="
                    text-(--color-text)
                    leading-relaxed
                    mb-8
                    
                ">
                    Actualmente busco formar parte de un equipo donde pueda seguir creciendo
                    profesionalmente, aprender de otros desarrolladores y aportar valor en
                    proyectos reales.
            </p>
            <div className="grid grid-cols-3 gap-3">
                <StatsCard value="2+" label="Años aprenddiendo"/>
                <StatsCard value="5+" label="Proyectos"/>
                <StatsCard value="4" label="Stacks"/>
            </div>
        </div>
    );
}
export default AboutContent;