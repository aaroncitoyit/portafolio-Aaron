import{
  FaJava,
  FaLaravel,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaServer,
  FaPalette,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

import{
  SiSpringboot,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";

export const skills = [
  {
    id: "backend",
    title: "Backend",
    description: "Logica y servicios",
    icon:FaServer,
    items: [
      {name: "Java", icon:FaJava, level: 90 },
      {name: "Spring Boot", icon:SiSpringboot, level:85},
      {name: "laravel", icon:FaLaravel , level:90},
  ],
},
{
  id: "frontend",
  title:"Frontend",
  description:"interfacez modernas",
  icon:FaPalette,
  items:[
    {name: "React", icon:FaReact, level:80},
    {name: "Tailwind", icon:SiTailwindcss, level:85},
  ]
},
{
  id: "database",
  title: "Base de Datos",
  description: "Almacenamiento de Datos",
  icon:FaDatabase,
  items:[
    {name: "Mysql", icon:SiMysql, level:80},
    {name: "PostgreSQl", icon:SiPostgresql, level:70},
  ]
},
{
  id:"herramientas",
  title:"Herramientas",
  description:"Devs y herramientas",
  icon:FaTools,
  items:[
    {name: "Docker", icon:FaDocker, level: 70},
    {name: "Git", icon:FaGitAlt, level: 80},
  ],
 },
];