import StatsCard from "./StatsCard";
import { FaEnvelope, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import { profile } from "../../data/profile";

function AboutContent(){
    return(
        <div className="space-y-8">
            <h3 
                className="
                    text-3xl
                    font-medium
                    md:text-[clamp(1.5rem,2vw+1rem,1.5rem)]
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

            <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                    <div className="
                        w-12 h-12 
                        rounded-xl 
                        bg-sky-500/10 
                        border 
                        border-sky-500/20 
                        flex 
                        items-center 
                        justify-center 
                        shrink-0
                    ">
                        <FaEnvelope className="text-sky-400" size={20} />
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-(--color-title)">Email</h4>
                        <a 
                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.social.email)}&su=${encodeURIComponent('Consulta desde mi portafolio')}&body=${encodeURIComponent('Hola Aaron,\n\nMe gustaría hablar contigo sobre una oportunidad.\n\nSaludos.')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-(--color-text) hover:text-sky-400 transition-colors"
                        >
                            {profile.social.email}
                        </a>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="
                        w-12 h-12 
                        rounded-xl 
                        bg-sky-500/10 
                        border 
                        border-sky-500/20 
                        flex 
                        items-center 
                        justify-center 
                        shrink-0
                    ">
                        <FaMapMarkerAlt className="text-sky-400" size={20} />
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-(--color-title)">Ubicación</h4>
                        <p className="text-(--color-text)">{profile.location}</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="
                        w-12 h-12 
                        rounded-xl 
                        bg-sky-500/10 
                        border 
                        border-sky-500/20 
                        flex 
                        items-center 
                        justify-center 
                        shrink-0
                    ">
                        <FaGithub className="text-sky-400" size={20} />
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-(--color-title)">GitHub</h4>
                        <a 
                            href={profile.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-(--color-text) hover:text-sky-400 transition-colors"
                        >
                            {profile.social.github.replace("https://", "")}
                        </a>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
                <StatsCard value="2+" label="Años aprenddiendo"/>
                <StatsCard value="5+" label="Proyectos"/>
                <StatsCard value="4" label="Stacks"/>
            </div>
        </div>
    );
}
export default AboutContent;