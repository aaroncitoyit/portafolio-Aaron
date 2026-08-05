import profileImage from "../../assets/Images/profile.png";
import Glow from "../ui/Glow";

function HeroImage(){
    return(

<div className="relative flex justify-center items-center shrink-0 lg:mt-12">

        <Glow
            size="420px"
            color="bg-cyan-500/20"
            blur="blur-3xl"
        />

        <Glow 
            size="280px"
            color="bg-indigo-500/20"
            blur="blur-2xl"
            className="translate-x-10 translate-y-10"
        />

        <div 
        className="
            relative
            w-75
            h-75
            md:w-95
            md:h-95
            lg:w-110
            lg:h-110
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