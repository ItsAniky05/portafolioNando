const nombreCahce = "EP3ArmandoSt"
const archivosCahce = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/js/script.js",

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
    console.log('fetch..', e)
    e.respondWith(
        caches.match(e.request)
        .then(respuestaCache => {
            return respuestaCache
        })
    )
})