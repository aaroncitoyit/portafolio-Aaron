function StatsCard( {value, label}){
    return(
        <div className="
            bg-(--color-card)
            border
            border-(--color-border)
            rounded-xl
            p-4
            text-center
        ">
            <p className="text-2xl font-semibold text-(--color-primary)">
                {value}
            </p>
            <p className="text-xs text-(--color-muted) mt-1">
                {label}
            </p>
        </div>
    );
}
export default StatsCard