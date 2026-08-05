function SectionTitle ({ title, subtitle}){
    return(
        <div className="mb-16">

        <p
            className="

                text-sky-400

                uppercase

                tracking-[0.3em]

                "

        >
            {subtitle}
        </p>

        <h2
             className="

                text-5xl

                font-bold

                text-white

                mt-3

                "
        >
                {title}
            </h2>
        </div>
    )
}
export default SectionTitle;