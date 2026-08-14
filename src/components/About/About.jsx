import Container from "../ui/Container";
import AboutCard from "./AboutCard";
import AboutContent from "./AboutContent";


function About(){
    return(
        <section 
            id="about"
            className="
                py-32
            "
            >
                <Container>

                    <div className="text-center mb-20">
                        <p className="
                            uppercase
                            tracking-[0.3em]
                            text-sky-400
                            font-semibold
                            mb-3
                        ">
                            Sobre mi
                        </p>

                       {/*  <h2 className="
                            text-5x1
                            font-bold
                            text-white
                            mb-5
                        ">

                            Conoce un poco más sobre mi
                        </h2> */}

                {/*         <p className="

                            text-slate-400
                            max-w-2x1
                            mx-auto
                            leading-8
                        ">
                            Me apasiona desarrollar aplicaciones modernas,
                            aprender nuevas tecnologías y crear soluciones
                            que realmente aporten valor.

                        </p> */}


                    </div>

                    <div 
                        className="
                            grid
                            lg:grid-cols-2
                            gap-20
                            items-center
                        ">
                            <AboutContent />
                            <AboutCard />
                    </div>
                </Container>
            
        </section>
    );
}
export default About;