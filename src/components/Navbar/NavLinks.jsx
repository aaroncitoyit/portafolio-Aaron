const links = [

    {
        name: "Acerca de",
        href: "#about",
    },
    {
        name: "habilidades",
        href: "#skills",
    },
    {
        name: "Proyecto",
        href: "#projects",
    },
    {
        name: "Experiencia",
        href: "#experience",
    },
    {
        name: "Contacto",
        href: "#contact",
    },
];



function NavLinks(){
    return(
        <nav>
            <ul className="
                hidden
                lg:flex
                items-center
                gap-12
            "
            >
                {links.map((links) => (
                    <li key={links.name}>
                        <a 
                            href={links.href}
                            className="
                                relative
                                text-slate-300
                                font-medium
                                transition-all
                                duration-300

                                hover:text-sky-400

                                after:absolute
                                after:left-0
                                after:bottom-2
                                after:h-0.5
                                after:bg-sky-400
                                after:transition-all
                                after:duration-300

                                hover:after:w-full
                            "
                            >
                                 {links.name}
                        </a>
                    </li>
                ))}

            </ul>
        </nav>
    );
}

export default NavLinks;