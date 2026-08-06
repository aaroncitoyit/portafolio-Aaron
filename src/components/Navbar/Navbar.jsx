import Container from "../ui/Container";
import Logo from "./logo";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

function Navbar(){
    return(
        <header 
            className="
                fixed
                top-0
                left-0
                w-full
                z-50
            "
            >
                <Container>
                    <div 
                        className="
                                h-20
                                flex
                                items-center
                                justify-between
                            "
                            >
                                <Logo />
                                <NavLinks />
                                <MobileMenu />

                            </div>
                </Container>
        </header>
    );
}

export default Navbar;