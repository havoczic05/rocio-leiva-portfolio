# 👑 Rocío Leyva — Alta Costura

Sitio web y portafolio de lujo editorial para la **diseñadora de Alta Costura Rocío Leyva**, construido con **Astro 5** y diseñado bajo estándares de alta moda*.

![Astro 5](https://img.shields.io/badge/Astro-5.1.0-ff5d01?style=for-the-badge&logo=astro&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18.0.0-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

---

## 🌟 Características Principales

- **Diseño Luxury Editorial**: Estética de alta moda con tipografía clásica (`Playfair Serif`), bordes de 1px ultra finos y contrastes de blanco y negro profundo.
- **Colección Interactiva & Vista Rápida**: Modal interactivo para visualizar vestidos con detalles de silueta, escote, tela y opciones de cita personalizada.
- **Agendamiento de Citas VIP**: Formulario de reserva especializado para futuras novias con selección de diseñador, silueta y fecha deseada.
- **Arquitectura Optimizada (Astro 5)**: Generación de contenido estático (SSG) de ultra alto rendimiento, tiempo de carga mínimo y SEO optimizado.
- **Preparado para Despliegue**: Configurado con `netlify.toml` para despliegue continuo instantáneo en Netlify o Vercel.

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Descripción |
| :--- | :--- |
| **[Astro 5](https://astro.build/)** | Framework web enfocado en velocidad y arquitectura de componentes |
| **CSS3 (Design Tokens)** | Sistema de diseño personalizado basado en variables CSS nativas |
| **TypeScript** | Verificación de tipos e integración limpia en componentes Astro |
| **Google Fonts** | Tipografía *Playfair Display* para títulos y *Roboto* para cuerpo de texto |

---

## 📁 Estructura del Proyecto

```text
rocio-leiva-portfolio/
├── public/                  # Archivos estáticos públicos (imágenes, favicon, etc.)
├── src/
│   ├── components/          # Componentes de la interfaz
│   │   ├── About.astro          # Sección Historia y Atelier
│   │   ├── AppointmentForm.astro# Formulario de Reserva de Citas
│   │   ├── Collection.astro     # Galería de Colección de Novia
│   │   ├── CollectionCard.astro # Tarjeta individual de Vestido
│   │   ├── DressModal.astro     # Modal de Vista Detallada de Vestido
│   │   ├── Footer.astro         # Pie de página y enlaces
│   │   ├── Hero.astro           # Portada principal
│   │   ├── Navbar.astro         # Navegación y Megamenú
│   │   ├── Process.astro        # Proceso de confección
│   │   ├── Testimonials.astro   # Reseñas de Novias Rocío Leyva
│   │   └── TopAlertBar.astro    # Barra superior de avisos VIP
│   ├── layouts/
│   │   └── Layout.astro         # Layout principal HTML & Meta tags
│   ├── pages/
│   │   └── index.astro          # Página principal del sitio
│   └── styles/
│       └── global.css       # Sistema de diseño y tokens globales
├── astro.config.mjs         # Configuración de Astro
├── netlify.toml             # Configuración de despliegue en Netlify
├── package.json             # Dependencias y scripts de Node.js
└── tsconfig.json            # Configuración de TypeScript
```
