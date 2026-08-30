import Button from "../ui/Button";
import TechStack from "./TechStack";
import SocialLinks from "./SocialLinks";
import { profile } from "../../data/profile";
import { FaMapMarkerAlt } from "react-icons/fa";

function HeroContent(){
    return(

        <div className="max-w-2xl">
            <div className="space-y-4 lg:space-y-4">

            <p className="text-sky-400 font-semibold tracking-[0.2em] uppercase">
                Hola, soy
            </p>

            <h1 className="text-[clamp(2rem,3.5vw+1.5rem,3rem)] font-extrabold leading-[1.1] text-white">
                {profile.name.split(" ")[0]}
                <br />
                {profile.name.split(" ").slice(1).join(" ")}
            </h1>

            <h2 className="text-2xl text-slate-300 font-medium">
                {profile.role}
            </h2>

            <p className="max-w-lg text-lg text-slate-400 leading-8">
                {profile.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-300">
                    <FaMapMarkerAlt className="text-sky-400" />
                    <span>Perú</span>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-2 text-sm text-green-400">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                    {profile.status}
                </span>
            </div>

            </div>

            <div className="mt-6 lg:mt-2 flex flex-wrap gap-4">
                <Button>
                    Ver Proyectos
                </Button>

                <Button variant="secondary">
                    Descargar CV
                </Button>

            </div>
            <div className="mt-7 lg:mt-8">
                <p 
                    className="
                        mb-5
                        text-sm
                        uppercase
                        tracking-[0.25em]
                        text-slate-500
                    "
                >
                    Tecnologias Principales
                </p>
                <TechStack/>
            </div>
            <div className="mt-4 lg:mt-5">

             {/*    <p 
                    className="
                        mb-5
                        text-sm
                        uppercase
                        tracking-[0.25em]
                        text-slate-500
                    "
                >
                    Conecta conmingo
                </p> */}

                 <SocialLinks/>

            </div>

        </div>
    );
}

export default HeroContent;