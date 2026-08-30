import SkillItems from "./SkillItems";
import { useState } from "react";

const LIMITE_VISIBLE = 6;

function SkillCategory({ icon: Icon, title, description, items }) {
    const [verTodo, setVerTodo] = useState(false);
    const haymas = items.length > LIMITE_VISIBLE;
    const itemsAMostrar = verTodo ? items : items.slice(0, LIMITE_VISIBLE);

    return (
        <article className="
            group
            bg-gradient-to-br
            from-(--color-card)
            to-(--color-surface)
            border
            border-(--color-border)
            rounded-2xl
            p-6 sm:p-7
            flex flex-col
            h-full
            min-h-[320px]
            transition-all duration-500
            hover:border-sky-500/30
            hover:shadow-xl
            hover:shadow-sky-500/10
            hover:-translate-y-1
        ">
            <header className="flex-shrink-0 mb-4">
                <div className="flex items-center gap-4">
                    <div className="
                        flex-shrink-0
                        w-12 h-12 sm:w-14 sm:h-14
                        rounded-xl
                        bg-gradient-to-br from-sky-500/20 to-indigo-500/20
                        border
                        border-sky-500/30
                        flex items-center justify-center
                        text-sky-400
                        shadow-lg shadow-sky-500/10
                        group-hover:scale-105 transition-transform duration-300
                    ">
                        <Icon className="text-xl sm:text-2xl" />
                    </div>
                    <div>
                        <h3 className="text-lg sm:text-xl font-bold text-(--color-title)">
                            {title}
                        </h3>
                        <p className="text-sm text-(--color-muted) mt-0.5">
                            {description}
                        </p>
                    </div>
                </div>
            </header>

            <div className="flex-1 min-h-0 flex flex-col gap-3">
                {itemsAMostrar.map((item) => (
                    <SkillItems
                        key={item.name}
                        icon={item.icon}
                        name={item.name}
                        level={item.level}
                    />
                ))}
            </div>

            <footer className="flex-shrink-0 mt-auto pt-4 border-t border-(--color-border)">
                {haymas && (
                    <button
                        onClick={() => setVerTodo(!verTodo)}
                        className="
                            w-full
                            flex items-center justify-center gap-1.5
                            px-3 py-2
                            rounded-lg
                            bg-(--color-surface)
                            border border-(--color-border)
                            text-sky-400 text-sm font-medium
                            hover:bg-sky-500/10
                            hover:border-sky-500/50
                            transition-all duration-300
                        "
                    >
                        {verTodo ? "Ver menos" : "Ver más"}
                        <span className={`transition-transform duration-300 ${verTodo ? "rotate-180" : ""}`}>
                            ▾
                        </span>
                    </button>
                )}
            </footer>
        </article>
    );
}

export default SkillCategory;