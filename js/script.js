let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})


let typed = new Typed('.auto-input', {
    strings: ['Desarrollador Back-end', 'Desarrollador de Videojuegos', 'Administrador de bases de datos'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})


function mostrarEstudios() {
    document.getElementById('lineStudy').style.display = 'block';
    document.getElementById('lineWork').style.display = 'none';
    document.getElementById('verEstudios').classList.add('active');
    document.getElementById('verTrabajos').classList.remove('active');
}

function mostrarTrabajos() {
    document.getElementById('lineStudy').style.display = 'none';
    document.getElementById('lineWork').style.display = 'block';
    document.getElementById('verEstudios').classList.remove('active');
    document.getElementById('verTrabajos').classList.add('active');
}

// Por defecto, mostrar la línea de tiempo de estudios
mostrarEstudios();

// Manejar los clics en los botones para cambiar la visibilidad
document.getElementById('verEstudios').addEventListener('click', mostrarEstudios);
document.getElementById('verTrabajos').addEventListener('click', mostrarTrabajos);