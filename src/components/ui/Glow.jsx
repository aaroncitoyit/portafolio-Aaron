function Glow({
    size = "400px",
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
        style={
            {
            width: size,
            height: size,
            }}
        />
    );
}
export default Glow;