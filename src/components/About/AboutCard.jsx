import {
    FaJava,
    FaReact,
    FaLaravel,
    FaMapMarkerAlt
}   from "react-icons/fa";

import {
    SiSpringboot,
    SiMysql
}   from "react-icons/si"


function AboutCard(){
    return(
        <div 
            className="
            bg-slate-900/70
            border
            border-slate-800
            rounded-3x1
            p-10
            backdrop-blur
            shadow-x1
            "> 
                <div className="space-y-8">

                    <div>
                        <h3 className="text-white text-2xl font-bold">
                            Perfil Profesional
                        </h3>
                        <p className="text-slate-400 mt-2">
                            Egresado de Desaroolo de Software.
                        </p>
                    </div>

                

                    <div className="space-y-4">

                        <div className="flex items-center gap-3 text-slate-300">
                            <FaJava className="text-orange-500 text-xl"/>
                            Java        
                        </div>

                        <div className="flex items-center gap-3 text-slate-300">
                            <SiSpringboot className="text-green-500 text-xl"/>
                            Spring Boot
                        </div>

                        <div className="flex items-center gap-3 text-slate-300">
                            <FaLaravel className="text-red-500 text-xl"/>
                            Laravel
                        </div>

                        <div className="flex items-center gap-3 text-slate-300">
                            <FaReact className="text-cyan-400 text-xl"/>
                            React
                        </div>
                        <div className="flex items-center gap-3 text-slate-300">
                            <SiMysql className="text-blue-400 text-xl"/>
                            Mysql
                        </div>

                    </div>

                    <div className="border-t border-slate-800 pt-6">

                        <div className="flex items-center gap-3 text-slate-400">

                            <FaMapMarkerAlt />
                            Peru

                        </div>
                            <div 
                                className="
                                    mt-4
                                    inline-flex
                                    items-center
                                    gap-2
                                    px-4
                                    py-2
                                    rounded-full
                                    bg-green-500/10
                                    border
                                    border-green-500/20
                                    text-green-400
                                    text-sm
                                ">
                                    <span className="w-2 h-2 rounded-full bg-green-400"></span>
                                    Disponibilidad para trabajar

                            </div>
                        </div>
                </div>
        </div>
    );
}
export default AboutCard;