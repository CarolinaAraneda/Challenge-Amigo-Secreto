// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    //crea la variable haciendo referencia al id amigo en HTML elimina los espacios y convierte todo a mayusculas
    let nombreAmigo = document.getElementById('amigo').value.trim().toUpperCase();
    //Si el nombre esta vacio
    if (nombreAmigo === ""){
        alert("Ingrese un nombre");
        return;
    }
    // si el nombre ya se encuentra ingresado
    if (listaAmigos.includes(nombreAmigo)){
        alert(`El nombre ${nombreAmigo} ya se encuentra ingresado`);
        limpiar();
        return;
    }
    //añade el nombre a la lista de amigos
    listaAmigos.push(nombreAmigo);
    //busca la lista de amigos, genera una lista en HTML con la variable nombreAmigo
    document.getElementById("listaAmigos").innerHTML+= `<li>${nombreAmigo}</li>`;
    limpiar();
}

//limpia el campo de texto
function limpiar() {
    document.querySelector('#amigo').value = '';
}

function sortearAmigo() {
    //si la lista de amigos esta vacia muestra mensaje indicando que no hay nombres para sortear
    if (listaAmigos.length === 0) {
        document.getElementById("resultado").textContent = "No hay nombres para sortear";
        return;
        }
    //genera un nombre aleatorio de lista de amigos
    let indice = Math.floor(Math.random() * listaAmigos.length);
    document.getElementById("resultado").textContent = "El nombre sorteado es: " + listaAmigos[indice];
    limpiarLista();
    }   

//Limpia la lista del HTML y del arreglo
function limpiarLista() {
    document.getElementById("listaAmigos").innerHTML = "";
    listaAmigos = []; 
}
