# Portafolio Personal

Portafolio web moderno construido con React y Vite para mostrar mi trabajo como **Software Developer**.

## ️ Tecnologías

- **React 19** — Librería de interfaz de usuario
- **Vite 8** — Build tool de desarrollo rápido
- **Tailwind CSS 4** — Estilizado utilitario
- **Framer Motion** — Animaciones en React
- **React Icons** — Iconografía

## Instalación

Requisitos: **Node.js 20+** y npm.

```bash
# 1. Clonar el repositorio
git clone https://github.com/<usuario>/portafolio.git
cd portafolio

# 2. Instalar dependencias
npm install

# 3. Entorno de desarrollo
npm run dev

# 4. Build de producción
npm run build
npm run preview
```

## Secciones

| Sección   | Descripción                                   |
| --------- | --------------------------------------------- |
| Hero      | Presentación, stack tecnológico y CTA         |
| About     | Información personal y perfil profesional     |
| Skills    | Habilidades técnicas                          |
| Projects  | Proyectos con enlaces a demo y repositorio    |
| Education | Formación académica                           |
| GitHub    | Estadísticas de actividad en GitHub           |
| Contact   | Formulario y formas de contacto               |

## Capturas de pantalla

Referencia de la interfaz en distintos viewports (guardadas en `assets/images/screenshots/`):

> Pendiente: agregar capturas de la interfaz.

## Scripts

| Comando           | Descripción              |
| ----------------- | ------------------------ |
| `npm run dev`     | Servidor de desarrollo   |
| `npm run build`   | Build de producción      |
| `npm run preview` | Previsualizar el build   |
| `npm run lint`    | Análisis de código con ESLint |

## Estructura del proyecto

```
src/
├── components/   # Componentes de React (por sección)
├── data/         # Datos del portafolio (perfil, proyectos, skills...)
├── styles/       # Estilos globales
├── App.jsx       # Composición de la aplicación
└── main.jsx      # Punto de entrada
```

## Documentación

- [ROADMAP.md](./ROADMAP.md) — Plan y progreso del proyecto
- [CHANGELOG.md](./CHANGELOG.md) — Historial de cambios
- [CONTRIBUTING.md](./CONTRIBUTING.md) — Convenciones del proyecto

### Documentación técnica (`docs/`)

- [design-system.md](./docs/design-system.md) — Manual visual (colores, tipografía, componentes)
- [components.md](./docs/components.md) — Responsabilidades y props de cada componente
- [architecture.md](./docs/architecture.md) — Organización del proyecto
- [deployment.md](./docs/deployment.md) — Despliegue en Vercel
- [api.md](./docs/api.md) — Integraciones y endpoints

## Licencia

Este proyecto está bajo la licencia [MIT](./LICENSE).