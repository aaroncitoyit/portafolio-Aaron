function Button({
    children, 
    variant="primary"

}){

    const variants={

        primary:
            "bg-sky-500 hover:bg-sky-400 text-white",
        secondary:
            "border border-sky-700 bg-slate-900 hover:bg-slate-800 text-white"
    }

    return(

        <button
            className={`

                px-7
                py-3
                rounded-xl
                duration-300
                font-semibold
                transition-all
                mt-8

                ${variants[variant]}

            `}
        
        >
            {children}

        </button>
    )
}

export default Button;