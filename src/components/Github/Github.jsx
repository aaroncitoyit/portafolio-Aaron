import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { profile } from "../../data/profile";
import { FaGithub, FaStar, FaCodeBranch, FaUser, FaEye } from "react-icons/fa";

function Github(){
    return(
        <section 
            id="github"
            className="py-16 sm:py-20 lg:py-24 bg-(--color-surface)"
        >
            <Container>
                <SectionTitle 
                    title="GitHub" 
                    subtitle="Mi actividad en GitHub" 
                />
                
                <div className="mt-12 lg:mt-16 space-y-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="bg-(--color-card) border border-(--color-border) rounded-2xl p-6 text-center">
                            <div className="flex items-center justify-center gap-2 text-sky-400 mb-2">
                                <FaUser className="text-xl" />
                            </div>
                            <p className="text-3xl font-bold text-(--color-title)">20+</p>
                            <p className="text-sm text-(--color-muted) mt-1">Repositorios</p>
                        </div>
                        <div className="bg-(--color-card) border border-(--color-border) rounded-2xl p-6 text-center">
                            <div className="flex items-center justify-center gap-2 text-amber-400 mb-2">
                                <FaStar className="text-xl" />
                            </div>
                            <p className="text-3xl font-bold text-(--color-title)">150+</p>
                            <p className="text-sm text-(--color-muted) mt-1">Stars totales</p>
                        </div>
                        <div className="bg-(--color-card) border border-(--color-border) rounded-2xl p-6 text-center">
                            <div className="flex items-center justify-center gap-2 text-green-400 mb-2">
                                <FaCodeBranch className="text-xl" />
                            </div>
                            <p className="text-3xl font-bold text-(--color-title)">50+</p>
                            <p className="text-sm text-(--color-muted) mt-1">Forks</p>
                        </div>
                        <div className="bg-(--color-card) border border-(--color-border) rounded-2xl p-6 text-center">
                            <div className="flex items-center justify-center gap-2 text-purple-400 mb-2">
                                <FaEye className="text-xl" />
                            </div>
                            <p className="text-3xl font-bold text-(--color-title)">5k+</p>
                            <p className="text-sm text-(--color-muted) mt-1">Visitas perfil</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-(--color-title) mb-6">Proyectos Destacados</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <GithubProjectCard 
                                name="taskflow"
                                description="Aplicación de gestión de tareas con autenticación, asignación y seguimiento de procesos en tiempo real."
                                stars={45}
                                forks={12}
                                language="Java"
                                url={profile.social.github + "/taskflow"}
                            />
                            <GithubProjectCard 
                                name="ecommerce-app"
                                description="Tienda de cotización con carrito y pasarela de productos."
                                stars={38}
                                forks={8}
                                language="PHP"
                                url={profile.social.github + "/ecommerce-app"}
                            />
                            <GithubProjectCard 
                                name="portfolio"
                                description="Mi portafolio personal desarrollado con React, Tailwind CSS y Vite."
                                stars={25}
                                forks={5}
                                language="JavaScript"
                                url={profile.social.github + "/portfolio"}
                            />
                        </div>
                    </div>

                    <div className="text-center pt-6 border-t border-(--color-border)">
                        <a 
                            href={profile.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                inline-flex
                                items-center
                                gap-3
                                px-8
                                py-4
                                rounded-xl
                                bg-sky-500
                                hover:bg-sky-400
                                text-white
                                font-semibold
                                transition-all
                                duration-300
                            "
                        >
                            <FaGithub className="text-xl" />
                            Ver mi perfil de GitHub
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}

function GithubProjectCard({ name, description, stars, forks, language, url }) {
    return (
        <a 
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="
                bg-(--color-card)
                border
                border-(--color-border)
                rounded-2xl
                p-6
                hover:border-sky-400
                hover:shadow-lg
                hover:shadow-sky-500/10
                transition-all
                duration-300
                flex
                flex-col
            "
        >
            <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-semibold text-(--color-title)">{name}</h4>
            </div>
            <p className="text-sm text-(--color-text) leading-relaxed mb-4 flex-1">{description}</p>
            <div className="flex items-center gap-4 text-sm text-(--color-muted)">
                <span className="flex items-center gap-1">
                    <FaStar className="text-amber-400" size={14} />
                    {stars}
                </span>
                <span className="flex items-center gap-1">
                    <FaCodeBranch className="text-green-400" size={14} />
                    {forks}
                </span>
                <span className="
                    px-2
                    py-1
                    rounded-full
                    bg-sky-500/10
                    text-sky-400
                    text-xs
                    font-medium
                ">
                    {language}
                </span>
            </div>
        </a>
    );
}

export default Github;