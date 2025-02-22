let amigos = [];

function actualizarVisibilidadResultados() {
    let buttonContainer = document.querySelector('.button-container');
    let resultadoTitle = document.getElementById('resultado-title');
    let listaResultado = document.getElementById('resultado');
    
    if (amigos.length === 0) {
        buttonContainer.style.display = 'none';
    } else {
        buttonContainer.style.display = 'block';
    }

    if (listaResultado.children.length === 0) {
        resultadoTitle.style.display = 'none';
    } else {
        resultadoTitle.style.display = 'block';
    }
}

function agregarAmigo() {
    // Obtener el valor del input con id 'amigo'
    let inputAmigo = document.getElementById('amigo');
    let nuevoAmigo = inputAmigo.value;

    // Validar que el campo no esté vacío
    if (nuevoAmigo.trim() === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    // Agregar el valor al array amigos
    amigos.push(nuevoAmigo);

    // Mostrar en consola el array amigos
    console.log(amigos);

    // Crear un nuevo elemento li y agregarlo a la lista ul con id 'amigos'
    let listaAmigos = document.getElementById('amigos');
    let nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = nuevoAmigo;
    listaAmigos.appendChild(nuevoElemento);

    // Limpiar el input
    inputAmigo.value = '';

    // Actualizar la visibilidad del botón
    actualizarVisibilidadResultados();
}

// La función sortearAmigo() debe seleccionar un amigo al azar
// del array amigos y mostrarlo como un elemento li en la lista
// id="resultado"
function sortearAmigo() {
    // Seleccionar un amigo al azar del array amigos
    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indice];

    // Mostrar en consola el amigo sorteado
    console.log(amigoSorteado);

    // Crear un nuevo elemento li y agregarlo a la lista ul con id 'resultado'
    let listaResultado = document.getElementById('resultado');
    let nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = amigoSorteado;
    listaResultado.appendChild(nuevoElemento);

    // Eliminar el amigo sorteado del array amigos
    amigos.splice(indice, 1);

    // Actualizar la visibilidad del botón
    actualizarVisibilidadResultados();
}

// Inicializar la visibilidad del botón al cargar la página
document.addEventListener('DOMContentLoaded', actualizarVisibilidadResultados);