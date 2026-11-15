# Mi portafolio

Portafolio estático (HTML, CSS y JS). No necesita instalar nada.

## Editar tu contenido
Todo lo que cambias está en `js/data.js`: tu perfil, intereses, proyectos y discos.
- Tus canciones: sube los `.mp3` a la carpeta `audio/` y escribe la ruta en `audio: "audio/mi-cancion.mp3"`.
- Solo sube audio que sea tuyo o que tengas permiso de publicar. Para canciones de otros artistas usa `link` (Spotify o YouTube).

## Subirlo a GitHub Pages
1. Crea un repositorio nuevo en GitHub (por ejemplo `portafolio`).
2. Sube todos los archivos de esta carpeta a la raíz del repositorio.
3. Ve a **Settings → Pages**, en *Source* elige **Deploy from a branch**, rama `main`, carpeta `/ (root)`, y guarda.
4. En un par de minutos estará en `https://TU-USUARIO.github.io/portafolio/`.

## Probarlo en tu computadora
Abre `index.html` en el navegador. Si el audio no carga, usa un servidor local: `python3 -m http.server`.
