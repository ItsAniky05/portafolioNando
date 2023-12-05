const nombreCahce = "EP3ArmandoSt"
const archivosCahce = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/js/script.js",
    "/js/contacto.js",
    "img/icons/Icon-72.png",
    "img/icons/Icon-120.png",
    "img/icons/Icon-128.png",
    "img/icons/Icon-144.png",
    "img/icons/Icon-152.png",
    "img/icons/Icon-196.png",
    "img/icons/Icon-256.png",
    "img/icons/Icon-512.png",
    "img/icons/icon72.png",
    "img/icons/icon120.png",
    "img/icons/icon128.png",
    "img/icons/icon144.png",
    "img/icons/icon152.png",
    "img/icons/icon196.png",
    "img/icons/icon256.png",
    "img/icons/icon512.png",
    "/img/149071.png",
    "/img/ciclismo.jpeg",
    "/img/fondo.jpeg",
    "/img/futbol.jpeg",
    "/img/gym.jpeg",
    "/img/mia.jpeg",
    "/img/paseos.jpeg",
    "/img/vagabond.png",
    "/img/videojuego.jpg",
    "/img/index.jpeg"
]

self.addEventListener('install', e => {
    console.log('El service worker se instalo de manera exitosa', e)
    e.waitUntil(
        caches.open(nombreCahce).then((cache) => {
            console.log("cache guardada correctamente")
            return cache.addAll(archivosCahce);
        })
    )
})

self.addEventListener('activate', e => {
    console.log('el servicio worker esta activo', e)
})


self.addEventListener('fetch', e => {
    // console.log('fetch..', e)
    e.respondWith(
        caches.match(e.request)
        .then(respuestaCache => {
            return respuestaCache
        })
    )
})