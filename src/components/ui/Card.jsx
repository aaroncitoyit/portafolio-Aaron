function Card({children}){
    return(
        <div
            className="

            bg-slate-800
            rounded-2xl
            p-6
            border
            border-slate-700

            hover:border-sky-400

            duration-300

            "
        
        >
            {children}
        </div>
    );
}
export default Card;