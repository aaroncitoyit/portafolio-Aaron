import profileImage from "../../assets/Images/profile.png";
import Glow from "../ui/Glow";

function HeroImage(){
    return(

<div className="relative flex justify-center items-center shrink-0 lg:mt-12">

        <Glow className="
            w-72 h-72
            md:w-80 md:h-80
            lg:w-[min(560px,50vh)] lg:h-[min(560px,50vh)]
            "
            color="bg-cyan-500/20"
            blur="blur-3xl"
        />

        <Glow className="
            w-52 h-52
            md:w-60 md:h-60
            lg:w-[min(370px,34vh)] lg:h-[min(370px,34vh)]
            md:translate-x-4 md:translate-y-4
            lg:translate-x-10 lg:translate-y-10
        "
            color="bg-indigo-500/20"
            blur="blur-2xl"
        />

        <div 
        className="
            relative
            w-64 h-64
            md:w-72 md:h-72
            lg:w-[min(480px,44vh)] lg:h-[min(480px,44vh)]
            rounded-full
            overflow-hidden
            border
            border-cyan-400/40
            shadow-2xl
            shadow-cyan-500/20
            bg-slate-900
        "
        >
            <img
                src={profileImage}
                alt="Aaron Macedo"
                className="w-full h-full object-cover"
            />

        </div>
        
</div>
    );
}

export default HeroImage;