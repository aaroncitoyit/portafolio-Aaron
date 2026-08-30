import {
    FaMapMarkerAlt
}   from "react-icons/fa";

import profileImage from "../../assets/Images/profile.png";



function AboutCard(){
    return(
        <div className="relative"> 
                <div 
                    className="
                        relative
                        h-[260px]
                        sm:h-[300px]
                        lg:h-[340px]
                        rounded-3xl
                        overflow-hidden
                        border
                        border-slate-800
                        bg-linear-to-br
                        from-slate-900
                        to-slate-950
                    ">

                        <img 
                            src={profileImage}
                            alt= "Aaron Macedo"
                            className="w-full h-full object-cover"
                        />

                </div>

                {/* <div 
                    className="
                    absolute
                    -bottom-5
                    sm:-bottom-6
                    left-4
                    right-4
                    sm:left-6
                    sm:right-6
                    bg-slate-900/90
                    backdrop-blur
                    border
                    border-slate-800
                    rounded-2xl
                    px-4
                    py-3
                    sm:px-5
                    sm:py-4
                    flex
                    flex-col
                    sm:flex-row
                    items-start
                    sm:items-center
                    justify-between
                    gap-2
                    sm:gap-0
                    shadow-xl
                    ">
                        <div 
                            className="
                                flex
                                items-center
                                gap-2
                                text-slate-300
                                text-xs
                                sm:text-sm
                            ">
                                <FaMapMarkerAlt className="text-sky-400"/>
                                Peru
                        </div>
                        <div className="
                                flex
                                items-center
                                gap-2
                                text-green-400
                                text-xs
                                sm:text-sm
                            ">
                                <span className="w-2 h-2 rounded-full bg-green-400"/>
                                   Disponible
                        </div>

                </div> */}
        </div>
    );
}
export default AboutCard;