import { useEffect, useState } from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { profile } from "../../data/profile";
import { FaGithub, FaStar, FaCodeBranch, FaUser, FaEye, FaSpinner } from "react-icons/fa";
import { fetchGitHubStats } from "../../lib/github";

function Github(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let mounted = true;

        async function loadData() {
            try {
                const result = await fetchGitHubStats();
                if (mounted) {
                    setData(result);
                    setError(null);
                }
            } catch (err) {
                if (mounted) {
                    setError(err.message);
                    console.error("GitHub fetch error:", err);
                }
            } finally {
                if (mounted) setLoading(false);
            }
        }

        loadData();

        return () => { mounted = false; };
    }, []);

    if (loading) {
        return (
            <section 
                id="github"
                className="py-16 sm:py-20 lg:py-24 bg-(--color-surface)"
            >
                <Container>
                    <SectionTitle 
                        title="GitHub" 
                        subtitle="Mi actividad en GitHub" 
                    />
                    <div className="mt-12 lg:mt-16 flex justify-center">
                        <FaSpinner className="text-sky-400 animate-spin text-3xl" />
                    </div>
                </Container>
            </section>
        );
    }

    if (error) {
        return (
            <section 
                id="github"
                className="py-16 sm:py-20 lg:py-24 bg-(--color-surface)"
            >
                <Container>
                    <SectionTitle 
                        title="GitHub" 
                        subtitle="Mi actividad en GitHub" 
                    />
                    <div className="mt-12 lg:mt-16 text-center text-amber-400">
                        <p>No se pudo cargar la información de GitHub</p>
                        <a 
                            href={profile.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sky-400 hover:underline mt-2 inline-block"
                        >
                            Ver perfil directamente en GitHub
                        </a>
                    </div>
                </Container>
            </section>
        );
    }

    const { user, stats } = data;

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
                            <p className="text-3xl font-bold text-(--color-title)">{user.public_repos}</p>
                            <p className="text-sm text-(--color-muted) mt-1">Repositorios públicos</p>
                        </div>
                        <div className="bg-(--color-card) border border-(--color-border) rounded-2xl p-6 text-center">
                            <div className="flex items-center justify-center gap-2 text-amber-400 mb-2">
                                <FaStar className="text-xl" />
                            </div>
                            <p className="text-3xl font-bold text-(--color-title)">{stats.totalStars}</p>
                            <p className="text-sm text-(--color-muted) mt-1">Stars totales</p>
                        </div>
                        <div className="bg-(--color-card) border border-(--color-border) rounded-2xl p-6 text-center">
                            <div className="flex items-center justify-center gap-2 text-green-400 mb-2">
                                <FaCodeBranch className="text-xl" />
                            </div>
                            <p className="text-3xl font-bold text-(--color-title)">{stats.totalForks}</p>
                            <p className="text-sm text-(--color-muted) mt-1">Forks totales</p>
                        </div>
                        <div className="bg-(--color-card) border border-(--color-border) rounded-2xl p-6 text-center">
                            <div className="flex items-center justify-center gap-2 text-purple-400 mb-2">
                                <FaEye className="text-xl" />
                            </div>
                            <p className="text-3xl font-bold text-(--color-title)">{user.followers}</p>
                            <p className="text-sm text-(--color-muted) mt-1">Seguidores</p>
                        </div>
                    </div>

                    {/* <div>
                        <h3 className="text-2xl font-semibold text-(--color-title) mb-6">Proyectos Destacados</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {featuredRepos.map((repo) => (
                                <GithubProjectCard 
                                    key={repo.id}
                                    repo={repo}
                                />
                            ))}
                        </div>
                    </div> */}

                    <div className="text-center pt-6 border-t border-(--color-border)">
                        <a 
                            href={user.html_url}
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

export default Github;