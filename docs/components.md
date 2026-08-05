# Componentes

Documentación de cada componente del proyecto. Cada entrada explica su responsabilidad, componentes hijos y props.

## Estructura de carpetas

```
src/components/
├── ui/            # Componentes base reutilizables
├── Navbar/
├── Hero/
├── About/
├── Skills/
├── Projects/
├── Education/
├── Github/
├── Contact/
└── Footer/
```

Cada carpeta expone su componente a través de un `index.js`.

---

## UI (base)

### Container

- **Responsabilidad**: Centrar y limitar el ancho del contenido (`max-w-7xl mx-auto px-6`).
- **Hijos**: Ninguno.
- **Props**: `children`.

### Button

- **Responsabilidad**: Botón accionable con variantes visuales.
- **Hijos**: Ninguno.
- **Props**: `children`, `variant` (`primary` | `secondary`).

### Badge

- **Responsabilidad**: Etiqueta visual para stack tecnológico.
- **Hijos**: Ninguno.
- **Props**: `children`.

### Card

- **Responsabilidad**: Contenedor elevado para contenido (proyectos, skills, etc.).
- **Hijos**: Contenido arbitrario.
- **Props**: `children`.

### SectionTitle

- **Responsabilidad**: Encabezado estandarizado de sección (subtítulo + título).
- **Hijos**: Ninguno.
- **Props**: `title`, `subtitle`.

---

## Navbar

- **Responsabilidad**: Barra de navegación principal con enlaces a las secciones.
- **Hijos**: Pendiente de definir.
- **Props**: No recibe props.
- **Estado**: Esqueleto inicial (`<header>navbar</header>`).

## Hero

- **Responsabilidad**: Presentación principal del portafolio (nombre, rol, CTA y stack).
- **Hijos**:
  - **HeroImage**: Avatar circular con borde `sky-500`.
  - **HeroContent**: Texto de presentación, estado "Disponible para Trabajar" y botones.
  - **TechStack**: Badges con las tecnologías (Java, Spring Boot, React, Laravel, MySQL, Docker).
- **Props**: Ninguno de sus hijos recibe props.

## About

- **Responsabilidad**: Sección de información personal y perfil profesional.
- **Hijos**: Ninguno.
- **Props**: No recibe props.
- **Estado**: Esqueleto inicial.

## Skills

- **Responsabilidad**: Mostrar habilidades técnicas.
- **Hijos**: `SkillCard` (por habilidad).
- **Props**: No recibe props.
- **Estado**: Esqueleto inicial.

## Projects

- **Responsabilidad**: Listar proyectos con enlaces a demo y repositorio.
- **Hijos**: `ProjectCard` (por proyecto).
- **Props**: No recibe props.
- **Estado**: Esqueleto inicial.

## Education

- **Responsabilidad**: Mostrar formación académica.
- **Hijos**: Ninguno.
- **Props**: No recibe props.
- **Estado**: Esqueleto inicial.

## Github

- **Responsabilidad**: Mostrar estadísticas de actividad en GitHub.
- **Hijos**: Ninguno.
- **Props**: No recibe props.
- **Estado**: Esqueleto inicial.

## Contact

- **Responsabilidad**: Formulario y formas de contacto.
- **Hijos**: Ninguno.
- **Props**: No recibe props.
- **Estado**: Esqueleto inicial.

## Footer

- **Responsabilidad**: Pie de página con créditos y enlaces.
- **Hijos**: Ninguno.
- **Props**: No recibe props.

---

Consulta [design-system.md](./design-system.md) para los estilos de los componentes base.

## Datos

Los datos estáticos viven en `src/data/`:

| Archivo       | Contenido                                  |
| ------------- | ------------------------------------------ |
| `profile.js`  | Perfil del autor                           |
| `skills.js`   | Lista de habilidades                       |
| `projects.js` | Proyectos (título, descripción, demo, github) |
| `education.js`| Formación académica                        |
| `social.js`   | Enlaces de redes sociales                  |