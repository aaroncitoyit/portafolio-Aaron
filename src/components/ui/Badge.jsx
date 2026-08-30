function Badge({ icon, children }) {
    return (
        <span className="
            inline-flex items-center gap-1.5
            px-3 py-1.5
            rounded-xl
            bg-gradient-to-r from-sky-500/10 to-indigo-500/10
            border border-sky-500/20
            text-sky-300
            text-xs font-semibold
            hover:bg-sky-500/20
            hover:border-sky-500/40
            hover:text-sky-200
            transition-all duration-300
        ">
            {icon && <span className="text-sky-400">{icon}</span>}
            {children}
        </span>
    );
}
export default Badge;