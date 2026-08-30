function Container({ children, className = "" }) {
    return (
        <div className={`w-full max-w-[90rem] mx-auto px-6 ${className}`}>
            {children}
        </div>
    );
}
export default Container;