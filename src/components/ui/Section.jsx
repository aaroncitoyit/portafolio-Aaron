function Section({ children, id}){

    return(
        <section
            id={id}
            className="
                py-28
                relative
            "
        >
            {children}
        </section>
    );
}
export default Section