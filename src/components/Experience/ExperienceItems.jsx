import Badge from "../ui/Badge";


function ExperienceItems({role, company, period, description, tech, achievements, icon: Icon}) {
    return(
        <div className="relative">
            <span className="
                    absolute
                    -left-8 sm:-left-10 lg:-left-12
                    top-2
                    w-3 h-3 sm:w-3.5 sm:h-3.5
                    rounded-full
                    bg-(--color-primary)
                    ring-4
                    ring-(--color-background)
            "/>
                <p 
                    className="
                        text-xs
                        sm:text-sm
                        text-(--color-primary)
                        font-medium
                        tracking-wide
                        mb-3 sm:mb-4
                    ">
                    {period}
                </p>
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 lg:gap-6">
                <div 
                    className="
                        bg-(--color-card)
                        border
                        border-(--color-border)
                        rounded-2xl
                        p-5 sm:p-6
                        flex
                        flex-col
                        gap-3 sm:gap-4
                ">
                    <div className="flex items-center gap-3">
                        <div 
                            className="
                                bg-(--color-surface)
                                border
                                border-(--color-border)
                                flex
                                items-center
                                justify-center
                                text-(--color-primary)
                                shrink-0
                            ">
                                <Icon className="text-sm sm:text-base" />
                        </div>
                        <div>
                            <h3 className="text-base sm:text-lg font-semibold text-(--color-title)">
                                {role}
                            </h3>
                            <p className="text-xs sm:text-sm text-(--color-primary)">{company}</p>
                        </div>
                    </div>

                    <p className="text-sm text-(--color-text) leading-relaxed">
                        {description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {tech.map((t) => (
                            <Badge key={t}>{t}</Badge>
                        ))}
                    </div>

                    <div className="lg:hidden border-t border-(--color-border) pt-4 mt-1">
                        <p className="text-xs uppercase tracking-widest text-(--color-muted) mb-2">
                            Logros
                        </p>
                        <ul className="flex flex-col gap-1.5">
                                {achievements.map((a)=>(
                                    <li key={a} className="text-sm text-(--color-text) flex gap-2">
                                        <span className="text-(--color-primary" shrink-0>•</span>
                                        {a}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
                <div 
                    className="
                        hidden
                        lg:flex
                        bg-(--color-card)
                        border
                        border-(--color-border)           
                        rounded-2xl
                        p-5 sm:p-6
                        flex-col
                        gap-2    
                    ">
                        <p className="text-xs uppercase tracking-widest text-(--color-muted) mb-2">
                            Logros
                        </p>
<ul className="flex flex-col gap-1.5">
                                {achievements.map((a)=>(
                                    <li key={a} className="text-sm text-(--color-text) flex gap-2">
                                        <span className="text-(--color-primary) shrink-0">•</span>
                                        {a}
                                    </li>
                                ))}
                        </ul>
                </div>
            </div>
        </div>
    );
}
export default ExperienceItems;