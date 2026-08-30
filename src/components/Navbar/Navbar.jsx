import { useState } from "react";
import Container from "../ui/Container";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

function Navbar(){
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const links = [
        { name: "Acerca de", href: "#about" },
        { name: "Educación", href: "#education" },
        { name: "Habilidades", href: "#skills" },
        { name: "Proyectos", href: "#projects" },
        { name: "GitHub", href: "#github" },
    ];

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return(
        <header 
            className="
                fixed
                top-0
                left-0
                w-full
                z-50
                bg-(--color-background)/90
                backdrop-blur-md
                border-b
                border-(--color-border)
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
                            <MobileMenu 
                                isOpen={isMobileMenuOpen} 
                                onToggle={setIsMobileMenuOpen}
                                links={links}
                                onLinkClick={closeMobileMenu}
                            />

                        </div>
                </Container>
        </header>
    );
}

export default Navbar;