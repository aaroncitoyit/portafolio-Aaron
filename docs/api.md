# API

Documentación de los endpoints e integraciones que consume el portafolio.

> Estado: ⏳ Pendiente — el proyecto aún no tiene integraciones con API.

## Integraciones previstas

### Formulario de contacto

- **Proveedor**: Pendiente de definir (EmailJS, servicio propio con Spring Boot, etc.).
- **Método**: `POST`.
- **Variables requeridas**: definidas en [deployment.md](./deployment.md) (variables `VITE_*`).

### GitHub

- **Endpoints**: estadísticas de perfil y repositorios.
- **Autenticación**: token de GitHub (`classic` / `fine-grained`) con permisos de solo lectura.
- **Uso previsto**: sección **GitHub** del portafolio.

## Registro de endpoints (plantilla)

Al implementarse, documentar cada integración con este formato:

```
### <Nombre>

- **URL**: `https://...`
- **Método**: GET/POST
- **Cabeceras**: ...
- **Autenticación**: ...
- **Respuesta**: ...
```

Cuando exista una API real, actualizar este documento y vincularlo desde [README](../README.md).