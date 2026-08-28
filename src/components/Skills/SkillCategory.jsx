
import SkillItems from "./SkillItems";
import { useState } from "react";

const LIMITE_VISIBLE = 6;

function SkillCategory({ icon: Icon, title, description, items }){

    const[verTodo, setVerTodo] = useState(false);
    const haymas = items.length > LIMITE_VISIBLE;
    const itemsAMostrar = verTodo ? items : items.slice(0, LIMITE_VISIBLE);

    return(
<div 
                className="
                    bg-(--color-card)
                    border
                    border-(--color-border)
                    rounded-2xl
                    p-5
                    sm:p-6
                    flex
                    flex-col
                    gap-5
                    sm:gap-6
                "
                >
            <div className="flex items-center gap-3 sm:gap-4">
                <div 
                    className="
                        w-10 h-10
                        sm:w-12 sm:h-12
                        rounded-full
                        bg-(--color-surface)
                        border
                        border-(--color-border)
                        flex
                        items-center
                        justify-center
                        text-(--color-primary)
                        sm:text-xl shrink-0
                    ">
                        <Icon />
                </div>
                <div>
                    <h3 className="
                        text-base
                        sm:text-lg
                        font-semibold
                        text-(--color-title)
                    ">
                        {title}
                    </h3>
                    <p className="text-sm text-(--color-muted)">
                        {description}
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4">
                {itemsAMostrar.map((item) =>(
                
                    <SkillItems 
                        key={item.name}
                        icon={item.icon}
                        name={item.name}
                        level={item.level}
                    />
                ))}
            </div>
                {haymas && (
                    <button 
                        onClick={() => setVerTodo(!verTodo)}    
                        className="
                            self-start
                            text-xs
                            sm:text-sm
                            text-(--color-primary)
                            hover:underline
                            flex
                            items-center
                            gap-1
                        "
                      >
                        {verTodo ? "Ver menos" : "Ver más"}
                        <span className={`transition-transform ${verTodo ? "rotate-180" : ""}`}>
                            ▾
                        </span>
                    </button>
                )}
        </div>

    );
}
export default SkillCategory;