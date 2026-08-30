import { useEffect, useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

function MobileMenu({ isOpen, onToggle, links, onLinkClick }) {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            const timer = setTimeout(() => {
                setHeight(window.innerHeight);
            }, 10);
            return () => clearTimeout(timer);
        } else {
            document.body.style.overflow = "";
        }
    }, [isOpen]);

    if (!isOpen) {
        return (
            <button
                onClick={() => onToggle(true)}
                className="lg:hidden text-white text-2xl p-2 rounded-lg hover:bg-slate-800 transition-colors z-50"
                aria-label="Abrir menú"
                aria-expanded="false"
            >
                <FaBars className="text-2xl" />
            </button>
        );
    }

    return (
        <>
            <div
                className="fixed inset-0 z-[50] bg-black/50 backdrop-blur-sm lg:hidden animate-fade-in"
                onClick={() => onToggle(false)}
                aria-hidden="true"
            />

            <aside
                className="fixed top-0 right-0 z-[60] lg:hidden w-full max-w-sm h-full bg-(--color-background) border-l border-(--color-border) shadow-2xl animate-slide-in-right flex flex-col"
                role="dialog"
                aria-label="Menú de navegación"
                style={{ height: height || '100vh' }}
            >
                <header className="flex items-center justify-between h-14 px-4 border-b border-(--color-border) bg-(--color-surface)/50 backdrop-blur-sm flex-shrink-0">
                    <span className="text-lg font-semibold text-(--color-title)">Menú</span>
                    <button
                        onClick={() => onToggle(false)}
                        className="w-10 h-10 rounded-lg flex items-center justify-center bg-(--color-card) border border-(--color-border) text-slate-300 hover:bg-sky-500/10 hover:border-sky-400 hover:text-sky-400 transition-all duration-300"
                        aria-label="Cerrar menú"
                    >
                        <FaTimes className="text-xl" />
                    </button>
                </header>

                <nav className="flex-1 min-h-0 overflow-y-auto px-4 py-4 space-y-2">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={onLinkClick}
                            className="block px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:text-sky-400 hover:bg-slate-800/50 transition-all duration-300 border border-transparent hover:border-sky-500/20"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <footer className="flex-shrink-0 p-4 border-t border-(--color-border) bg-(--color-surface)/30 backdrop-blur-sm">
                    <a
                        href="https://github.com/aaroncitoyit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-sky-500/30 text-sky-400 font-medium hover:bg-sky-500/10 hover:border-sky-400 transition-all duration-300"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        GitHub
                    </a>
                </footer>
            </aside>
        </>
    );
}

export default MobileMenu;