import profileImage from "../../assets/Images/profile.png";
import Glow from "../ui/Glow";

function HeroImage(){
    return(

<div className="relative flex justify-center items-center shrink-0 lg:mt-12">

        <Glow className="
            w-90
            h-90
            md:w-115
            md:h-115
            lg:w-[min(560px,50vh)]
            lg:h-[min(560px,50vh)]
            "
            color="bg-cyan-500/20"
            blur="blur-3xl"
        />

        <Glow className="
            w-60
            h-60
            md:w-77.5
            md:h-77.5
            lg:w-[min(370px,34vh)]
            lg:h-[min(370px,34vh)]
            translate-x-10 translate-y-10
        "
            color="bg-indigo-500/20"
            blur="blur-2xl"
        />

        <div 
        className="
            relative
            w-75
            h-75
            md:w-96
            md:h-96
            lg:w-[min(480px,44vh)]
            lg:h-[min(480px,44vh)]
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