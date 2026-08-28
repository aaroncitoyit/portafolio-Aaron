import { FaUniversity, FaGraduationCap } from "react-icons/fa";

export const education = [
    {
        id: "tecsup",
        degree: "Técnico en Desarrollo de Software",
        institution: "Tecsup",
        period: "2023 - 2025",
        icon: FaGraduationCap,
        description: "Formación técnica enfocada en desarrollo de aplicaciones web, bases de datos, metodologías ágiles y arquitectura de software.",
        achievements: [
            "Proyecto final: Sistema de gestión académica con React y Node.js",
            "Certificación en Fundamentos de Bases de Datos",
            "Participación en hackatones institucionales"
        ],
    },
    {
        id: "self-taught",
        degree: "Autodidacta - Full Stack Development",
        institution: "Recursos online y proyectos personales",
        period: "2021 - Presente",
        icon: FaUniversity,
        description: "Aprendizaje continuo de tecnologías modernas: Java, Spring Boot, Laravel, React, Docker, bases de datos relacionales y arquitectura de microservicios.",
        achievements: [
            "Construcción de 5+ proyectos full stack completos",
            "Contribuciones a proyectos open source",
            "Dominio de patrones de diseño y clean architecture"
        ],
    },
];