import Button from "../ui/Button";
import TechStack from "./TechStack";
import SocialLinks from "./SocialLinks";
import { profile  } from "../../data/profile";

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

            </div>

            <div className="mt-6 lg:mt-7">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                   🟢 {profile.status}
                </span>
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