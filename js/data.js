/* ===== EDITA AQUÍ TUS DATOS ===== */
const PERFIL = {
  nombre: "TU NOMBRE",
  rol: "Ingeniería · Código · Música · Edición",
  bio: "Soy estudiante de ingeniería y programador independiente. Me gusta construir cosas que funcionen, grabar música en casa y editar video hasta que quede bien. Aquí junto todo lo que hago.",
  lema: "Si lo puedo imaginar, lo armo.",
  ficha: [["Estudio","Tu carrera / escuela"],["Ciudad","Culiacán, Sinaloa"],["Herramientas","JavaScript, Python, tu DAW, tu editor de video"],["Ahora mismo","Aprendiendo… (pon lo que sea)"]],
  stickers: ["Hip hop","Corridos","Reggaetón","Programar","Editar video","Producir beats","Electrónica","Videojuegos"],
  links: [["Correo","mailto:tucorreo@ejemplo.com"],["GitHub","https://github.com/tuusuario"],["YouTube","https://youtube.com/@tucanal"],["Instagram","https://instagram.com/tuusuario"]],
  pie: "Gracias por pasar. Escríbeme."
};
const INTERESES = [
  {txt:"HIP HOP",c:"#f2d03b"},{txt:"CORRIDOS",c:"#ff6b35"},{txt:"REGGAETÓN",c:"#ff3d81"},
  {txt:"JavaScript",c:"#fff"},{txt:"Python",c:"#7bdcb5"},{txt:"Arduino",c:"#4cc9f0"},
  {txt:"Beats",c:"#f2d03b"},{txt:"Edición",c:"#c77dff"},{txt:"Ingeniería",c:"#fff"},{txt:"Mezcla",c:"#ff6b35"},
  {txt:"Circuitos",c:"#7bdcb5"},{txt:"Rimas",c:"#ff3d81"},{txt:"Color",c:"#4cc9f0"},{txt:"Código",c:"#fff"}
];
const CATS = {todo:"Todo", codigo:"Código", escuela:"Escuela", musica:"Música", edicion:"Edición"};
// cat: codigo | escuela | musica | edicion. "link" es opcional.
const PROYECTOS = [
  {cat:"codigo", t:"App de tareas", d:"Aplicación web para organizar pendientes.", x:"Hecho con JavaScript, HTML y CSS.", link:""},
  {cat:"codigo", t:"Bot de Discord", d:"Bot con comandos de moderación y música.", x:"Hecho con Python.", link:""},
  {cat:"escuela", t:"Proyecto de física", d:"Simulación de tiro parabólico con gráficas.", x:"Incluye reporte y código.", link:""},
  {cat:"escuela", t:"Prototipo con Arduino", d:"Circuito con sensor de temperatura.", x:"Con diagrama y fotos del armado.", link:""},
  {cat:"musica", t:"EP en proceso", d:"Canciones grabadas y mezcladas en casa.", x:"Hip hop y corridos.", link:""},
  {cat:"musica", t:"Beats y covers", d:"Producciones cortas para practicar mezcla.", x:"Enlaza tu SoundCloud o YouTube.", link:""},
  {cat:"edicion", t:"Cortometraje", d:"Edición, color y sonido de un corto.", x:"Añade el enlace del video.", link:""},
  {cat:"edicion", t:"Reel de edición", d:"Mis mejores cortes y transiciones.", x:"Duración: 1 minuto.", link:""}
];
const VCATS = {mias:"Las que hice", gustan:"Me gustan", reco:"Te recomiendo"};
/* audio: ruta a un mp3 que subas a la carpeta /audio (ej. "audio/mi-cancion.mp3").
   link: enlace opcional a Spotify/YouTube. Si no hay audio, se muestra el enlace. */
const VINILOS = [
  {cat:"mias", t:"Mi canción 1", a:"Tu nombre · hip hop", color:"#ff6b35", audio:"", link:""},
  {cat:"mias", t:"Mi canción 2", a:"Tu nombre · corrido", color:"#f2d03b", audio:"", link:""},
  {cat:"mias", t:"Mi canción 3", a:"Tu nombre · reggaetón", color:"#ff3d81", audio:"", link:""},
  {cat:"gustan", t:"Canción que me gusta 1", a:"Artista", color:"#4cc9f0", audio:"", link:""},
  {cat:"gustan", t:"Canción que me gusta 2", a:"Artista", color:"#7bdcb5", audio:"", link:""},
  {cat:"gustan", t:"Canción que me gusta 3", a:"Artista", color:"#c77dff", audio:"", link:""},
  {cat:"reco", t:"Recomendación 1", a:"Artista", color:"#ff3d81", audio:"", link:""},
  {cat:"reco", t:"Recomendación 2", a:"Artista", color:"#f2d03b", audio:"", link:""},
  {cat:"reco", t:"Recomendación 3", a:"Artista", color:"#4cc9f0", audio:"", link:""}
];
