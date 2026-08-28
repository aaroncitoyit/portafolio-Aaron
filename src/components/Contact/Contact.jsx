import { useState } from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import { FaEnvelope, FaGithub, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { profile } from "../../data/profile";

function Contact(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("sending");
        
        const mailtoLink = `mailto:${profile.social.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nombre: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
        
        window.location.href = mailtoLink;
        
        setTimeout(() => {
            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
        }, 1000);
    };

    return(
        <section 
            id="contact"
            className="py-16 sm:py-20 lg:py-24"
        >
            <Container>
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    <div>
                        <SectionTitle 
                            title="Contacto" 
                            subtitle="Trabajemos juntos" 
                            className="text-left"
                        />
                        
                        <p className="text-(--color-text) leading-relaxed mt-6 max-w-lg">
                            Estoy abierto a nuevas oportunidades y proyectos interesantes. 
                            Si tienes una idea en mente o buscas a alguien para tu equipo, 
                            no dudes en escribirme.
                        </p>

                        <div className="mt-10 space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="
                                    w-12 h-12 
                                    rounded-xl 
                                    bg-sky-500/10 
                                    border 
                                    border-sky-500/20 
                                    flex 
                                    items-center 
                                    justify-center 
                                    shrink-0
                                ">
                                    <FaEnvelope className="text-sky-400" size={20} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-(--color-title)">Email</h4>
                                    <a 
                                        href={`mailto:${profile.social.email}`}
                                        className="text-(--color-text) hover:text-sky-400 transition-colors"
                                    >
                                        {profile.social.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="
                                    w-12 h-12 
                                    rounded-xl 
                                    bg-sky-500/10 
                                    border 
                                    border-sky-500/20 
                                    flex 
                                    items-center 
                                    justify-center 
                                    shrink-0
                                ">
                                    <FaMapMarkerAlt className="text-sky-400" size={20} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-(--color-title)">Ubicación</h4>
                                    <p className="text-(--color-text)">{profile.location}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="
                                    w-12 h-12 
                                    rounded-xl 
                                    bg-sky-500/10 
                                    border 
                                    border-sky-500/20 
                                    flex 
                                    items-center 
                                    justify-center 
                                    shrink-0
                                ">
                                    <FaGithub className="text-sky-400" size={20} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-(--color-title)">GitHub</h4>
                                    <a 
                                        href={profile.social.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-(--color-text) hover:text-sky-400 transition-colors"
                                    >
                                        {profile.social.github.replace("https://", "")}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-(--color-title) mb-2">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="
                                        w-full
                                        px-4 py-3
                                        rounded-xl
                                        bg-(--color-surface)
                                        border
                                        border-(--color-border)
                                        text-(--color-title)
                                        placeholder-(--color-muted)
                                        focus:outline-none
                                        focus:border-sky-400
                                        focus:ring-2
                                        focus:ring-sky-500/20
                                        transition-all
                                        duration-300
                                    "
                                    placeholder="Tu nombre"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-(--color-title) mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="
                                        w-full
                                        px-4 py-3
                                        rounded-xl
                                        bg-(--color-surface)
                                        border
                                        border-(--color-border)
                                        text-(--color-title)
                                        placeholder-(--color-muted)
                                        focus:outline-none
                                        focus:border-sky-400
                                        focus:ring-2
                                        focus:ring-sky-500/20
                                        transition-all
                                        duration-300
                                    "
                                    placeholder="tu@email.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-(--color-title) mb-2">
                                Asunto
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="
                                    w-full
                                    px-4 py-3
                                    rounded-xl
                                    bg-(--color-surface)
                                    border
                                    border-(--color-border)
                                    text-(--color-title)
                                    placeholder-(--color-muted)
                                    focus:outline-none
                                    focus:border-sky-400
                                    focus:ring-2
                                    focus:ring-sky-500/20
                                    transition-all
                                    duration-300
                                "
                                placeholder="Asunto del mensaje"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-(--color-title) mb-2">
                                Mensaje
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="
                                    w-full
                                    px-4 py-3
                                    rounded-xl
                                    bg-(--color-surface)
                                    border
                                    border-(--color-border)
                                    text-(--color-title)
                                    placeholder-(--color-muted)
                                    focus:outline-none
                                    focus:border-sky-400
                                    focus:ring-2
                                    focus:ring-sky-500/20
                                    transition-all
                                    duration-300
                                    resize-none
                                "
                                placeholder="Cuéntame sobre tu proyecto o idea..."
                            />
                        </div>

                        <Button type="submit" className="w-full sm:w-auto">
                            <FaPaperPlane className="mr-2" size={18} />
                            Enviar Mensaje
                        </Button>

                        {status === "success" && (
                            <div className="
                                text-center sm:text-left
                                text-green-400
                                text-sm
                                animate-fade-in
                            ">
                                ¡Mensaje enviado! Se abrirá tu cliente de email.
                            </div>
                        )}
                    </form>
                </div>
            </Container>
        </section>
    );
}

export default Contact;