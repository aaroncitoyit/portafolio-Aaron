import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import Badge from "../ui/Badge";

const cardStyles = `
  group
  bg-gradient-to-br
  from-(--color-card)
  to-(--color-surface)
  border
  border-(--color-border)
  rounded-2xl
  overflow-hidden
  flex
  flex-col
  transition-all
  duration-500
  hover:border-sky-500/30
  hover:shadow-2xl
  hover:shadow-sky-500/10
  hover:-translate-y-1
`;

const imageWrapperStyles = `
  relative
  h-48
  sm:h-52
  bg-(--color-surface)
  overflow-hidden
`;

const contentStyles = "p-6 flex flex-col gap-4 flex-1";

function ProjectCard({ name, description, image, technologies, github, demo }) {
    return (
        <article className={cardStyles}>
            <div className={imageWrapperStyles}>
                {image ? (
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-sky-500/10 to-indigo-500/10">
                        <FaCode className="text-4xl text-sky-500/30" />
                    </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-(--color-background)/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-(--color-background)/80 backdrop-blur-sm border border-(--color-border) flex items-center justify-center text-sky-400">
                    <FaCode className="text-sm" />
                </div>

                <div className="absolute bottom-4 right-4 px-3 py-1 rounded-lg bg-sky-500/20 backdrop-blur-sm border border-sky-500/30 text-sky-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Ver proyecto
                </div>
            </div>

            <div className={contentStyles}>
                <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-(--color-title) mb-1 group-hover:text-sky-400 transition-colors duration-300">
                            {name}
                        </h3>
                        <p className="text-sm text-(--color-muted) line-clamp-2">
                            {description}
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    {technologies.slice(0, 4).map((t) => (
                        <Badge key={t}>{t}</Badge>
                    ))}
                    {technologies.length > 4 && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full bg-(--color-surface) border border-(--color-border) text-(--color-muted) text-xs font-medium">
                            +{technologies.length - 4}
                        </span>
                    )}
                </div>

                <div className="flex gap-3 mt-auto pt-4 border-t border-(--color-border)">
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 h-11 rounded-xl border border-(--color-border) bg-(--color-surface) text-(--color-text) text-sm font-medium hover:bg-(--color-card) hover:border-sky-500/50 hover:text-sky-400 transition-all duration-300"
                    >
                        <FaGithub className="w-4 h-4" />
                        Código
                    </a>
                    <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 h-11 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-sm font-semibold hover:from-sky-400 hover:to-indigo-500 hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-300"
                    >
                        Demo
                        <FaExternalLinkAlt className="w-3.5 h-3.5" />
                    </a>
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;