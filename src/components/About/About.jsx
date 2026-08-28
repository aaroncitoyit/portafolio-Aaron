import Container from "../ui/Container";
import AboutCard from "./AboutCard";
import AboutContent from "./AboutContent";
import SectionTitle from "../ui/SectionTitle";


function About(){
    return(
        <section 
            id="about"
            className="py-32"
            >
                <Container>

                    <SectionTitle 
                        title="Sobre mí" 
                        subtitle="Conoce un poco más sobre mi"
                    />

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