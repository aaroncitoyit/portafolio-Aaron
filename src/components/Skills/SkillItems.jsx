function SkillItems({ icon: Icon, name, level }) {
    return (
        <div className="group flex items-center gap-3">
            <div className="
                flex-shrink-0 w-10 h-10
                rounded-lg
                bg-(--color-surface)
                border border-(--color-border)
                flex items-center justify-center
                text-sky-400
                group-hover:border-sky-500/50
                transition-all duration-300
            ">
                <Icon className="text-xl" />
            </div>
            <span className="text-sm font-medium text-(--color-title) w-24 shrink-0">
                {name}
            </span>

            <div className="flex-1 h-2.5 rounded-full bg-(--color-surface) overflow-hidden relative">
                <div
                    className="
                        h-full rounded-full
                        bg-gradient-to-r from-sky-500 to-indigo-600
                        shadow-lg shadow-sky-500/25
                        transition-all duration-1000 ease-out
                    "
                    style={{ width: `${level}%` }}
                />
            </div>

            <span className="
                text-sm font-semibold text-sky-400
                w-10 text-right shrink-0
                bg-gradient-to-r from-sky-500 to-indigo-600
                bg-clip-text text-transparent
            ">
                {level}%
            </span>
        </div>
    );
}

export default SkillItems;