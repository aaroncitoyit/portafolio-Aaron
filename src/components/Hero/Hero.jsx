import Container from "../ui/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import BackgroundGrid from "../ui/BackgroundGrid";


function Hero(){
    return(

        <section 
            id="home"
            className="
                min-h-screen
                lg:min-h-[90vh]
                pt-28 lg:pt-32
                pb-24
                lg:pb-0
                flex
                items-center
                relative
                overflow-hidden
                justify-center
                bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,.12),transparent_35%)]
            "
        >
        <BackgroundGrid />

        <Container className="w-full">
                <div 
                    className="
                        flex 
                        flex-col 
                        lg:flex-row 
                        items-center 
                        lg:items-start
                        lg:justify-between 
                        gap-16 
                        lg:gap-24
                        w-full
                    "

                >
                    <HeroContent/>
                    <HeroImage />
                </div>
        </Container>
          
        </section>
    );
}

export default Hero;