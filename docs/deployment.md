# Despliegue

Guía para publicar el proyecto en **Vercel**.

> Estado: ⏳ Pendiente — se completa al cumplir la **Fase 5: Lanzamiento** del [ROADMAP](../ROADMAP.md).

## Requisitos previos

- Cuenta en [Vercel](https://vercel.com).
- Repositorio del proyecto subido a GitHub.
- Build local verificado: `npm run build`.

## Despliegue automático (Git)

1. En Vercel, ir a **Add New → Project**.
2. Seleccionar el repositorio del portafolio.
3. Configurar el proyecto:

   | Campo     | Valor             |
   | --------- | ----------------- |
   | Framework | **Vite**          |
   | Build command | `npm run build` |
   | Output directory | `dist`     |

4. En **Environment Variables**, añadir las necesarias (ver más abajo).
5. Pulsar **Deploy**.

Cada push a la rama de producción genera un despliegue automático; los commits a ramas de revisión generan *preview deploys*.

## Variables de entorno

| Variable | Descripción                     | Aplicación a |
| -------- | ------------------------------- | ------------ |
| `VITE_EMAIL` (ej.) | Email de contacto del formulario | Contact |

> Los valores van precedidos de `VITE_` para ser accesibles desde el cliente en Vite. Completar según se implementen servicios (formulario de contacto, API de GitHub, etc.).

## Build local

```bash
npm install   # instalar dependencias
npm run build # genera la carpeta dist/
npm run preview # previsualizar el build antes de publicar
```

## Dominio personalizado

1. En el panel del proyecto ir a **Settings → Domains**.
2. Añadir el dominio (`misitio.com` / `www.misitio.com`).
3. Configurar los **DNS** en el proveedor del dominio según los registros que indique Vercel (usualmente `CNAME` para `www` y registros `A` para el dominio raíz).

## Comandos útiles (CLI)

```bash
npm i -g vercel      # instalar la CLI
vercel               # despliegue de vista previa
vercel --prod        # despliegue a producción
```

## Despliegues notables

| Fecha | Entorno | URL | Notas |
| ----- | ------- | --- | ----- |
| —     | —       | —   | Pendiente |

Registrar cada despliegue importante en el [CHANGELOG](../CHANGELOG.md).