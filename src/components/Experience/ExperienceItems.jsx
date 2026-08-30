import Badge from "../ui/Badge";

function ExperienceItems({ role, company, period, description, tech, achievements, icon: Icon }) {
    return (
        <article className="relative">
            <div className="absolute left-0 top-8 w-0.5 h-full bg-gradient-to-b from-sky-500/50 to-transparent lg:left-4" />

            <div className="relative lg:pl-12">
                <div className="
                    absolute left-0 top-8
                    w-3 h-3
                    rounded-full
                    bg-sky-500
                    border-4 border-(--color-background)
                    shadow-lg shadow-sky-500/25
                    lg:left-3
                " />

                <p className="
                    text-xs sm:text-sm
                    text-sky-400 font-semibold
                    tracking-wider uppercase
                    mb-4
                ">
                    {period}
                </p>

                <div className="
                    bg-gradient-to-br
                    from-(--color-card)
                    to-(--color-surface)
                    border
                    border-(--color-border)
                    rounded-2xl
                    p-6 sm:p-7
                    transition-all duration-500
                    hover:border-sky-500/30
                    hover:shadow-xl
                    hover:shadow-sky-500/10
                    hover:-translate-x-1
                ">
                    <div className="flex items-start gap-4">
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
                        ">
                            <Icon className="text-xl sm:text-2xl" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="
                                text-lg sm:text-xl font-bold text-(--color-title)
                                mb-1
                            ">
                                {role}
                            </h3>
                            <p className="text-sm sm:text-base text-sky-400 font-medium">
                                {company}
                            </p>
                        </div>
                    </div>

                    <p className="mt-4 text-sm sm:text-base text-(--color-text) leading-relaxed">
                        {description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {tech.map((t) => (
                            <Badge key={t}>{t}</Badge>
                        ))}
                    </div>

                    <div className="mt-6 pt-4 border-t border-(--color-border)">
                        <p className="text-xs uppercase tracking-widest text-(--color-muted) mb-3">
                            Logros destacados
                        </p>
                        <ul className="space-y-2">
                            {achievements.map((a) => (
                                <li key={a} className="flex items-start gap-3 text-sm text-(--color-text) leading-relaxed">
                                    <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-sky-500" />
                                    <span>{a}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default ExperienceItems;