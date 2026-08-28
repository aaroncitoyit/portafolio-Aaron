import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

function MobileMenu({ isOpen, onToggle, links, onLinkClick }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen) {
        return (
            <button
                onClick={() => onToggle(true)}
                className="
                    lg:hidden
                    text-white
                    text-2xl
                    p-2
                    rounded-lg
                    hover:bg-slate-800
                    transition-colors
                    z-50
                "
                aria-label="Abrir menú"
                aria-expanded="false"
            >
                ☰
            </button>
        );
    }

    return (
        <>
            <button
                onClick={() => onToggle(false)}
                className="
                    lg:hidden
                    fixed
                    top-5
                    right-5
                    z-50
                    w-11 h-11
                    rounded-full
                    flex items-center justify-center
                    bg-slate-800
                    border
                    border-slate-700
                    hover:border-sky-400
                    hover:text-sky-400
                    transition-all
                    duration-300
                "
                aria-label="Cerrar menú"
                aria-expanded="true"
            >
                <FaTimes className="text-xl" />
            </button>

            <div
                className="
                    fixed
                    inset-0
                    z-40
                    bg-black/60
                    backdrop-blur-sm
                    lg:hidden
                    animate-fade-in
                "
                onClick={() => onToggle(false)}
                aria-hidden="true"
            />

            <nav
                className="
                    fixed
                    top-0
                    right-0
                    h-full
                    w-full
                    max-w-sm
                    bg-(--color-background)
                    border-l
                    border-(--color-border)
                    z-50
                    lg:hidden
                    flex
                    flex-col
                    animate-slide-in-right
                "
                role="dialog"
                aria-label="Menú de navegación"
            >
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between h-20 px-6 border-b border-(--color-border)">
                        <span className="text-xl font-bold text-(--color-title)">Menú</span>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto px-6 py-8 space-y-4">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={onLinkClick}
                                className="
                                    block
                                    px-4 py-3
                                    rounded-xl
                                    text-lg
                                    font-medium
                                    text-slate-300
                                    hover:text-sky-400
                                    hover:bg-slate-800
                                    transition-all
                                    duration-300
                                "
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="p-6 border-t border-(--color-border) space-y-3">
                        <a
                            href="https://github.com/aaroncitoyit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                flex items-center justify-center gap-2
                                px-4 py-3
                                rounded-xl
                                border
                                border-sky-500/30
                                text-sky-400
                                font-medium
                                hover:bg-sky-500/10
                                transition-all
                                duration-300
                            "
                        >
                            Ver GitHub
                        </a>
                        <a
                            href="mailto:orestesmacedo5@gmail.com"
                            className="
                                flex items-center justify-center gap-2
                                px-4 py-3
                                rounded-xl
                                bg-sky-500
                                text-white
                                font-medium
                                hover:bg-sky-400
                                transition-all
                                duration-300
                            "
                        >
                            Contactar
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default MobileMenu;