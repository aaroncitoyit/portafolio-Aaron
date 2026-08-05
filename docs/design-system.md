# Sistema de diseño

Manual visual del proyecto: define colores, tipografía, componentes, espaciados, sombras, bordes, animaciones y comportamiento responsive.

## Visión de diseño

Principio rector: **limpio, elegante y minimalista** — nunca recargado.

| Referente | De dónde tomamos |
| --------- | ---------------- |
| Vercel    | Limpieza y tipografía |
| GitHub    | Tarjetas y organización |
| Linear    | Animaciones sutiles |
| Raycast   | Efectos de fondo |
| Figma     | Espaciados y consistencia |
| Apple     | Elegancia y minimalismo |

Se priorizan: orden visual, buen espaciado, jerarquía tipográfica clara y contenido al centro. Cada sección se diseña antes de codificar (ver etapas en el [ROADMAP](../ROADMAP.md)).

## Colores

Tokens de color basados en la paleta **slate** y acentos **sky**, usados a lo largo de la interfaz.

| Token              | Valor      | Uso                                   |
| ------------------ | ---------- | ------------------------------------- |
| `sky-400`          | #38bdf8    | Acentos, texto SEO, bordes hover      |
| `sky-500`          | #0ea5e9    | Fondo de botones primarios            |
| `slate-300`        | #cbd5e1    | Texto secundario                      |
| `slate-400`        | #94a3b8    | Texto descriptivo                     |
| `slate-700`        | #334155    | Borde de cards                        |
| `slate-800`        | #1e293b    | Fondo de cards y avatares             |
| white              | #ffffff    | Títulos principales                   |

## Tipografía

| Elemento | Clase Tailwind        | Uso                         |
| -------- | --------------------- | --------------------------- |
| H1       | `text-6xl font-bold`  | Nombre en el Hero           |
| H2       | `text-4xl font-bold`  | Títulos de sección          |
| Subtítulo| `uppercase tracking-[0.25em] text-sm text-sky-400` | Etiqueta de sección |
| Párrafo  | `text-lg text-slate-400` | Texto descriptivo        |

## Componentes base (UI)

### Button

Botón con variantes definidas en un mapa interno.

| Prop     | Tipo     | Default     | Descripción              |
| -------- | -------- | ----------- | ------------------------ |
| `children` | node   | —           | Contenido del botón      |
| `variant`  | string | `primary`   | `primary` o `secondary`  |

- **Primary**: fondo `sky-500`, texto blanco, hover `sky-600`.
- **Secondary**: borde `sky-500`, texto `sky-400`, hover invertido.

### Badge

Etiqueta de stack tecnológico. Acepta solo `children`. Fondo `sky-500/10`, texto `sky-400`, forma `rounded-full`.

### Card

Contenedor elevado para contenido. Acepta solo `children`. Fondo `slate-800`, borde `slate-700`, hover borde `sky-400`, esquinas `rounded-2xl`.

### Container

Centra y limita el ancho del contenido. Acepta solo `children`.

### SectionTitle

Encabezado de sección con subtítulo y título.

| Prop       | Tipo   | Descripción            |
| ---------- | ------ | ---------------------- |
| `subtitle` | string | Etiqueta superior      |
| `title`    | string | Título principal (H2)  |

## Espaciados

| Token    | Valor |
| -------- | ----- |
| `px-3`   | 0.75rem (12px) |
| `px-6`   | 1.5rem (24px) |
| `py-1`   | 0.25rem (4px) |
| `py-3`   | 0.75rem (12px) |
| `p-6`    | 1.5rem (24px) |
| `mt-2`   | 0.5rem (8px) |
| `mt-10`  | 2.5rem (40px) |
| `mb-12`  | 3rem (48px) |

## Sombras

Sin sombras aplicadas actualmente. Los niveles se logran con fondo (`slate-800`) y borde (`slate-700`). Si se añaden sombras, documentar aquí.

## Bordes

| Uso      | Radio     | Color                  |
| -------- | --------- | ---------------------- |
| Button   | `rounded-xl` | —                  |
| Card     | `rounded-2xl` | `slate-700` / hover `sky-400` |
| Badge    | `rounded-full` | —              |
| Avatar   | `rounded-full` | `sky-500` wrap |

## Animaciones

- Transiciones de **150ms a 300ms** (`duration-300`) en hovers de botones y cards.
- Las animaciones avanzadas (scroll, secuencias) se gestionarán con **Framer Motion** (pendiente de implementar).

## Responsive

Estrategia *mobile-first*:

- Contenido centrado con `Container` (`max-w-7xl`).
- Breakpoints estándar de Tailwind: `sm`, `md`, `lg`, `xl`, `2xl`.
- Las capturas de referencia se guardan en [assets/images/screenshots](../assets/images/screenshots).

Consulta también [components.md](./components.md) para la documentación por componente.