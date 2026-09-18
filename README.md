# Portfolio — Tomás Romero

## ¿Qué es esto?

Mi portfolio personal: un sitio de una sola página que presenta quién soy, en qué trabajé, qué stack uso y cómo contactarme, con un diseño propio (paleta violeta/azul, fondo de partículas interactivo) en vez de una plantilla genérica.

## ¿Para qué sirve?

Es la carta de presentación que uso para mostrar mi trabajo a reclutadores, clientes freelance y cualquiera que quiera saber qué hago. Reúne en un solo lugar mi experiencia, proyectos, stack técnico, formación y una vía directa de contacto (formulario + copiar email/redes con un click).

## ¿Qué tecnologías usa?

- **React 19 + TypeScript + Vite** — base de la app y del build.
- **Tailwind CSS v4** — estilos, con tokens de color propios para tema claro/oscuro.
- **Framer Motion** — todas las animaciones de scroll, hover y transiciones.
- **react-i18next** — sitio bilingüe (español/inglés) con detección automática de idioma.
- **tsparticles** — fondo de partículas interactivo (reacciona al mouse con hover y click).
- **EmailJS** — envío del formulario de contacto sin backend propio.
- **react-icons + lucide-react** — íconos, incluyendo los logos de cada tecnología con su color de marca.

## ¿Cómo lo veo funcionando?

**Demo en vivo:** [tomasromero.tarctech.com](https://tomasromero.tarctech.com)

## ¿Cómo lo corro en mi máquina?

```bash
git clone https://github.com/Tomas-Romero/Portfolio.git
cd Portfolio
npm install
cp .env.example .env   # completar las claves de EmailJS
npm run dev
```

Abrí `http://localhost:5173`. Para generar el build de producción: `npm run build` (el resultado queda en `dist/`).

## ¿Qué partes interesantes tiene?

- **Tema claro/oscuro real**: los colores están definidos como tokens CSS que se remapean según la clase activa en `<html>`, no hardcodeados por componente.
- **Fondo de partículas consciente del tema**: el color de las partículas cambia entre modo claro y oscuro para mantener buen contraste, y reacciona al mouse en toda la página (no solo donde no hay contenido encima) sin interferir con los clicks en botones o links.
- **Timeline con scroll-spy propio**: en Experiencia y Formación, el ítem que estás mirando se resalta automáticamente a medida que scrolleás, además de poder seleccionarlo con un click.
- **Stack coloreado por marca**: cada tecnología en "Mi Stack" y en las tarjetas de proyectos usa el color oficial de su logo, no un color genérico del sitio.
- **Contacto sin fricción**: cada dato de contacto (email, GitHub, LinkedIn) se puede copiar con un click además de abrir el link directo.
