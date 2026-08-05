function Badge ({ icon, children }){
    return(
        <span
            className="
            inline-flex
            flex-row
            gap-2
            px-4
            py-2
            rounded-full
            bg-slate-800
            border
            border-slate-700 
            text-sky-300
            text-sm
            font-medium
            hover:border-sky-500
            hover:bg-slate-700
            transition-all
            duration-300
            
            "
        
        >
            {icon}
            {children}
        </span>
    );
}
export default Badge;