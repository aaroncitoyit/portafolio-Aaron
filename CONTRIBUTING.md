# Convenciones del proyecto

Guías para mantener el código limpio, consistente y fácil de mantener.

## Scripts

Usar los scripts definidos en `package.json`:

| Comando           | Propósito                |
| ----------------- | ------------------------ |
| `npm run dev`     | Servidor de desarrollo   |
| `npm run build`   | Build de producción      |
| `npm run preview` | Previsualizar el build   |
| `npm run lint`    | Verificar estilo de código |

Antes de terminar cualquier cambio, ejecutar `npm run lint` para asegurar que el código pasa las reglas de ESLint.

## Estructura de carpetas

- **`src/components/`** — Un directorio por sección (ej. `Hero/`, `Skills/`).
  Luego se accede vía `index.js` y se usa en `App.jsx`.
- **`src/data/`** — Datos estáticos (perfil, proyectos, skills, educación, redes). Separar datos de la lógica.
- **`src/styles/`** — Estilos globales. El estilizado específico de componentes usa clases de Tailwind.
- **`src/ui/`** — Componentes reutilizables (Botones, Badges, etc.).

## Convenciones de componentes

- Nombres de archivos y componentes en **PascalCase** (ej. `ProjectCard.jsx`).
- Los componentes sin estado se escriben como funciones flecha o funciones declaradas.
- Sujetos de UI (Botones, Badges, inputs) van en `src/components/ui/`.
- Los datos nunca se hardcodean dentro de componentes; vienen de `src/data/`.

## Documentación

- Mantener **ROADMAP.md** actualizado: marcar `[x]` las tareas completadas.
- Registrar todo cambio relevante en **CHANGELOG.md**.

## Commits

Los mensajes de commit deben ser claros y en imperativo (ej. `Add skills section`, `Fix navbar responsive`). Sigue los principales tipos:

- `feat:` nueva funcionalidad
- `fix:` corrección de bugs
- `refactor:` reestructuración sin cambiar comportamiento
- `docs:` cambios de documentación
- `style:` cambios de formato sin afectar lógica

Para más detalles puedes abrir una *issue* o un *pull request* siguiendo estas guías.