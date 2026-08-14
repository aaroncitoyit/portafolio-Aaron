function SkillItems({ icon:Icon, name, level}) {
    return(

        <div className="flex items-center gap-3">
            <Icon className="text-lg sm:text-2xl shrink-0 text-[var(--color-primary)]"/>
            <span className="text-sm sm:text-base text-(--color-text) w-20 sm:w-29 shrink-0">
                {name}
            </span>

            <div className="flex-1 h-1.5 sm:h-2 rounded-full bg-(--color-surface) overflow-hidden">
                <div
                    className="
                            h-full
                            rounded-full
                            bg-(--color-primary)
                    "
                    style={{ width:`${level}%` }}
                    />
            </div>

            <span className="text-xs sm:text-sm text-(--color-muted) w-9 sm:w-10 text-right shrink-0">
                {level}%
            </span>


        </div>
    );
}

export default SkillItems;