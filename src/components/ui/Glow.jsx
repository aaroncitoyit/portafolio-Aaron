function Glow({
    color = "bg-cyan-500/20",
    blur = "blur-3xl",
    className = "",
}) {

    return(
        <div 
            className={`
            absolute
            rounded-full
            ${color}
            ${blur}
            ${className}
        `}
        
        />
    );
}
export default Glow;