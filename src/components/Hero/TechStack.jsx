import Badge from "../ui/Badge";
import { FaJava } from "react-icons/fa";
import { profile } from "../../data/profile"
import {
  SiSpringboot,
  SiLaravel,
  SiReact,
  SiDocker,
  SiGit,
  SiMysql,
} from "react-icons/si";

const iconMap = {
    Java: <FaJava className="text-orange-500" size={14} />,
    "Spring Boot": <SiSpringboot className="text-green-500" size={14} />,
    Laravel: <SiLaravel className="text-red-500" size={14} />,
    React: <SiReact className="text-cyan-400" size={14} />,
    Docker: <SiDocker className="text-blue-400" size={14} />,
    Git: <SiGit className="text-orange-600" size={14} />,
    MySQL: <SiMysql className="text-blue-400" size={14} />,
};

function TechStack(){
    return(
        <div className="
            flex 
            flex-wrap 
            gap-3 
            mt-4
            "
        >
           {profile.tech.map((tech) => (
            <Badge key={tech} icon={iconMap[tech]}>
                {tech}
            </Badge>
           ))}
        </div>
    );
}

export default TechStack;