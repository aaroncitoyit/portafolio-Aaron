import Container from "../ui/Container";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { profile } from "../../data/profile";

function Footer(){
    const currentYear = new Date().getFullYear();

    return(
        <footer className="bg-(--color-surface) border-t border-(--color-border)">
            <Container className="py-12 lg:py-16">
                <div className="grid gap-10 lg:gap-12 lg:grid-cols-2 lg:justify-items-center lg:items-start">
                    <div className="lg:flex lg:flex-col lg:items-center lg:text-center">
                        <h4 className="text-lg font-semibold text-(--color-title) mb-4">Enlaces rápidos</h4>
                        <nav className="space-y-3 lg:items-center lg:flex lg:flex-col">
                            <a href="#about" className="text-(--color-text) hover:text-sky-400 transition-colors block">Sobre mí</a>
                            <a href="#skills" className="text-(--color-text) hover:text-sky-400 transition-colors block">Habilidades</a>
                            <a href="#projects" className="text-(--color-text) hover:text-sky-400 transition-colors block">Proyectos</a>
                            <a href="#experience" className="text-(--color-text) hover:text-sky-400 transition-colors block">Experiencia</a>
                            <a href="#education" className="text-(--color-text) hover:text-sky-400 transition-colors block">Educación</a>
                            <a href="#contact" className="text-(--color-text) hover:text-sky-400 transition-colors block">Contacto</a>
                        </nav>
                    </div>

                    <div className="lg:flex lg:flex-col lg:items-center lg:text-center">
                        <h4 className="text-lg font-semibold text-(--color-title) mb-4">Conecta conmigo</h4>
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <a 
                                href={profile.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon
                                    w-11 h-11
                                    rounded-full
                                    flex items-center justify-center
                                    bg-slate-800
                                    border
                                    border-slate-700
                                    text-slate-200
                                    hover:border-sky-400
                                    hover:text-sky-400
                                    hover:-translate-y-1
                                    hover:scale-105
                                    hover:shadow-lg
                                    hover:shadow-sky-500/20
                                    active:scale-95
                                    focus-visible:outline-none
                                    focus-visible:ring-2
                                    focus-visible:ring-sky-400
                                    focus-visible:ring-offset-2
                                    focus-visible:ring-offset-(--color-surface)
                                    transition-all
                                    duration-300
                                    ease-out
                                "
                                aria-label="GitHub"
                            >
                                <FaGithub className="text-xl" />
                            </a>
                            <a 
                                href={profile.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon
                                    w-11 h-11
                                    rounded-full
                                    flex items-center justify-center
                                    bg-slate-800
                                    border
                                    border-slate-700
                                    text-slate-200
                                    hover:border-sky-400
                                    hover:text-sky-400
                                    hover:-translate-y-1
                                    hover:scale-105
                                    hover:shadow-lg
                                    hover:shadow-sky-500/20
                                    active:scale-95
                                    focus-visible:outline-none
                                    focus-visible:ring-2
                                    focus-visible:ring-sky-400
                                    focus-visible:ring-offset-2
                                    focus-visible:ring-offset-(--color-surface)
                                    transition-all
                                    duration-300
                                    ease-out
                                "
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin className="text-xl" />
                            </a>
                            <a 
                                href={`mailto:${profile.social.email}?subject=${encodeURIComponent('Consulta desde mi portafolio')}&body=${encodeURIComponent('Hola Aaron,\n\nMe gustaría hablar contigo sobre una oportunidad.\n\nSaludos.')}`}
                                className="social-icon
                                    w-11 h-11
                                    rounded-full
                                    flex items-center justify-center
                                    bg-slate-800
                                    border
                                    border-slate-700
                                    text-slate-200
                                    hover:border-sky-400
                                    hover:text-sky-400
                                    hover:-translate-y-1
                                    hover:scale-105
                                    hover:shadow-lg
                                    hover:shadow-sky-500/20
                                    active:scale-95
                                    focus-visible:outline-none
                                    focus-visible:ring-2
                                    focus-visible:ring-sky-400
                                    focus-visible:ring-offset-2
                                    focus-visible:ring-offset-(--color-surface)
                                    transition-all
                                    duration-300
                                    ease-out
                                "
                                aria-label="Email"
                            >
                                <FaEnvelope className="text-xl" />
                            </a>
                        </div>
                        <p className="text-sm text-(--color-muted)">
                            Disponible para oportunidades freelance y tiempo completo.
                        </p>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-(--color-border) flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-(--color-muted)">
                        © {currentYear} Aaron Macedo. Todos los derechos reservados.
                    </p>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;