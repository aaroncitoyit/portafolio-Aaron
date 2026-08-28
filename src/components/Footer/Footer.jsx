import Container from "../ui/Container";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { profile } from "../../data/profile";

function Footer(){
    const currentYear = new Date().getFullYear();

    return(
        <footer className="bg-(--color-surface) border-t border-(--color-border)">
            <Container className="py-12 lg:py-16">
                <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
                    <div className="lg:col-span-1">
                        <a 
                            href="#home"
                            className="
                                text-2xl
                                font-bold
                                tracking-tight
                                text-white
                                transition-colors
                                duration-300
                                hover:text-sky-400
                                inline-block
                                mb-4
                            "
                        >
                            Aaron
                            <span className="text-sky-400">.</span>
                        </a>
                        <p className="text-(--color-text) leading-relaxed max-w-xs">
                            Desarrollador Full Stack especializado en Java, Spring Boot, Laravel y React. 
                            Construyo aplicaciones web modernas, escalables y enfocadas en la experiencia de usuario.
                        </p>
                    </div>

                    <div className="lg:col-span-1">
                        <h4 className="text-lg font-semibold text-(--color-title) mb-4">Enlaces rápidos</h4>
                        <nav className="space-y-3">
                            <a href="#about" className="text-(--color-text) hover:text-sky-400 transition-colors block">Sobre mí</a>
                            <a href="#skills" className="text-(--color-text) hover:text-sky-400 transition-colors block">Habilidades</a>
                            <a href="#projects" className="text-(--color-text) hover:text-sky-400 transition-colors block">Proyectos</a>
                            <a href="#experience" className="text-(--color-text) hover:text-sky-400 transition-colors block">Experiencia</a>
                            <a href="#education" className="text-(--color-text) hover:text-sky-400 transition-colors block">Educación</a>
                            <a href="#contact" className="text-(--color-text) hover:text-sky-400 transition-colors block">Contacto</a>
                        </nav>
                    </div>

                    <div className="lg:col-span-1">
                        <h4 className="text-lg font-semibold text-(--color-title) mb-4">Conecta conmigo</h4>
                        <div className="flex items-center gap-4 mb-6">
                            <a 
                                href={profile.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    w-11 h-11
                                    rounded-full
                                    flex items-center justify-center
                                    bg-slate-800
                                    border
                                    border-slate-700
                                    hover:border-sky-400
                                    hover:text-sky-400
                                    transition-all
                                    duration-300
                                "
                                aria-label="GitHub"
                            >
                                <FaGithub className="text-xl" />
                            </a>
                            <a 
                                href={profile.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    w-11 h-11
                                    rounded-full
                                    flex items-center justify-center
                                    bg-slate-800
                                    border
                                    border-slate-700
                                    hover:border-sky-400
                                    hover:text-sky-400
                                    transition-all
                                    duration-300
                                "
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin className="text-xl" />
                            </a>
                            <a 
                                href={`mailto:${profile.social.email}`}
                                className="
                                    w-11 h-11
                                    rounded-full
                                    flex items-center justify-center
                                    bg-slate-800
                                    border
                                    border-slate-700
                                    hover:border-sky-400
                                    hover:text-sky-400
                                    transition-all
                                    duration-300
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
                    <p className="text-xs text-(--color-muted)">
                        Construido con React, Tailwind CSS y Vite
                    </p>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;