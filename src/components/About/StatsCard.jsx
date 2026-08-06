function StatsCard( {value, label}){
    return(
        <div className="
            bg-(--color-card)
            border
            border(--color-card)
            rounded-xl
            p-4
            text-center
        ">
            <p className="text-2xl font-semibold text-(--color-primary)">
                {value}
            </p>
            <p className="text-xs tex-(--color-muted) mt-1">
                {label}
            </p>
        </div>
    );
}
export default StatsCard