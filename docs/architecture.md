# Arquitectura

Explica por qué el proyecto está organizado de esta manera y cómo se relacionan las capas.

## Flujo general

```
src
└── main.jsx                  # Punto de entrada (monta la App)
    └── App.jsx               # Compone las secciones en orden
        └── components/       # Componentes por sección
            └── ui/           # Componentes base reutilizables
```

## Principios de organización

### 1. Componentes agrupados por sección

Cada sección de la página tiene su propia carpeta en `src/components/` (`Hero`, `About`, `Skills`, ...). Esto:

- Facilita encontrar y modificar código ligado a una zona concreta de la UI.
- Mantiene el `App.jsx` legible y predecible: un import por sección.
- Escala bien: añadir una sección nueva = añadir una carpeta.

### 2. Separación entre UI base y secciones

Los elementos reutilizables (`Button`, `Badge`, `Card`, `Container`, `SectionTitle`) viven en `src/components/ui/`. Evita repetir estilos y da consistencia visual (ver [design-system.md](./design-system.md)).

### 3. Datos separados de la lógica

El contenido del portafolio (perfil, proyectos, skills, educación, redes) está en `src/data/` como archivos `.js` que exportan constantes. Beneficios:

- Cambiar el contenido no requiere tocar componentes.
- Es trivial sustituirlo por una API en el futuro.

### 4. Estilado con Tailwind

Los estilos se aplican con clases utilitarias de Tailwind dentro de JSX. No existen hojas de estilos por componente; los estilos globales quedan en `src/styles/` y `App.css`.

## Relación entre capas

```
src/components
├── ui                   # dependencia: ninguna (base)
│   ├── Button
│   ├── Badge
│   ├── Card
│   ├── Container
│   └── SectionTitle
├── Hero                 # usa ui/*
│   ├── HeroImage
│   ├── HeroContent      # usa Button, TechStack
│   └── TechStack        # usa Badge
├── Projects             # usa ui/*, data/projects.js
├── Skills               # usa ui/*, data/skills.js
└── ...                  # resto de secciones
```

## Reglas a mantener

- No importar componentes de sección dentro de otros **componentes de sección**; la composición ocurre en `App.jsx`.
- Los componentes de `ui/` no deben depender de datos ni de otras secciones.
- Los archivos de `src/data/` no deben importar componentes ni JSX.
- Mantener un solo punto de entrada (export) por carpeta vía `index.js`.

## Cómo crecer el proyecto

- **Nueva sección**: crear `src/components/<Seccion>/` con `<Seccion>.jsx` + `index.js`, e importarla en `App.jsx`.
- **Nuevo dato**: añadirlo a `src/data/` y consumirlo desde la sección correspondiente.
- **Migrar a API**: sustituir los imports de `src/data/*` por llamadas `fetch`, sin tocar la UI.