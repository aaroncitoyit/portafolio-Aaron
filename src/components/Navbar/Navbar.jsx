import { useEffect, useRef, useState } from "react";
import { profile } from "../../data/profile";
import Container from "../ui/Container";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

function Navbar(){
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const lastScrollY = useRef(0);

    const handleContactClick = (event) => {
        event.preventDefault();

        const email = profile.social.email;
        const subject = "Consulta desde mi portafolio";
        const body = "Hola Aaron,\n\nMe gustaría hablar contigo sobre una oportunidad.\n\nSaludos.";

        const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoUrl;

        window.setTimeout(() => {
            window.open(gmailUrl, "_blank", "noopener,noreferrer");
        }, 1200);
    };

    const links = [
        { name: "Acerca de", href: "#about" },
        { name: "Educación", href: "#education" },
        { name: "Habilidades", href: "#skills" },
        { name: "Proyectos", href: "#projects" },
        { name: "GitHub", href: "#github" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;

            if (currentY <= 24) {
                setIsHeaderVisible(true);
                lastScrollY.current = currentY;
                return;
            }

            const shouldShowHeader = currentY < lastScrollY.current;
            setIsHeaderVisible(shouldShowHeader);
            lastScrollY.current = currentY;
        };

        const handlePointerMove = (event) => {
            if (event.clientY <= 110) {
                setIsHeaderVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("pointermove", handlePointerMove);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("pointermove", handlePointerMove);
        };
    }, []);

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return(
        <header 
            className={
                `fixed top-0 left-0 w-full z-50 bg-(--color-background)/90 backdrop-blur-md border-b border-(--color-border) transition-transform duration-300 ease-out ${
                    isHeaderVisible ? "translate-y-0" : "-translate-y-full"
                }`
            }
            >
                <Container className="px-6">
                    <div 
                        className="h-20 flex items-center justify-between"
                        >
                            <Logo />
                            <NavLinks />

                            <div className="flex items-center gap-3">
                                <a
                                    href={`mailto:${profile.social.email}?subject=${encodeURIComponent('Consulta desde mi portafolio')}&body=${encodeURIComponent('Hola Aaron,\n\nMe gustaría hablar contigo sobre una oportunidad.\n\nSaludos.')}`}
                                    onClick={handleContactClick}
                                    className="
                                        hidden
                                        lg:inline-flex
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-sky-500
                                        px-4
                                        py-2.5
                                        text-sm
                                        font-semibold
                                        text-white
                                        shadow-lg
                                        shadow-sky-500/20
                                        transition-all
                                        duration-300
                                        hover:bg-sky-400
                                        hover:shadow-sky-400/30
                                        hover:-translate-y-0.5
                                    "
                                >
                                    Contactar
                                </a>

                                <a
                                    href={`mailto:${profile.social.email}?subject=${encodeURIComponent('Consulta desde mi portafolio')}&body=${encodeURIComponent('Hola Aaron,\n\nMe gustaría hablar contigo sobre una oportunidad.\n\nSaludos.')}`}
                                    onClick={handleContactClick}
                                    className="
                                        inline-flex
                                        lg:hidden
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-sky-500
                                        px-3
                                        py-2
                                        text-sm
                                        font-semibold
                                        text-white
                                        shadow-lg
                                        shadow-sky-500/20
                                        transition-all
                                        duration-300
                                        hover:bg-sky-400
                                        hover:shadow-sky-400/30
                                        hover:-translate-y-0.5
                                    "
                                >
                                    Contactar
                                </a>

                                <MobileMenu 
                                    isOpen={isMobileMenuOpen} 
                                    onToggle={setIsMobileMenuOpen}
                                    links={links}
                                    onLinkClick={closeMobileMenu}
                                />
                            </div>
                        </div>
                </Container>
        </header>
    );
}

export default Navbar;