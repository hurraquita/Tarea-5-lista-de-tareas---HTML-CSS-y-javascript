"use strict"

let listaTareas = []

function aumentarLista() {
const texto = document.getElementById("Tarea")
const lista = document.getElementById("lista")
// lo de abajo es lo que se usa para añadir cosas al html desde javascript mientras se ejecuta
//lo que esta entre comillas son las etiquetas que se añaden y lo del medio lo que se añade en bruto
//en este caso lo que sea que tenga id texto que sea un input
lista.innerHTML += "<li>" + texto.value + "</li>"
//luego se crea la necesidad de renderizado una funcion que haga que se pueda guardar en memoria 
//la lista para mas tarde 
}
//esto se usa para que nada mas cargue la pagina o esta actualice los contenidos del Array aparezcan en pantalla
function renderizarLista() {
    //misma constante de la otra funcion
const texto = document.getElementById("Tarea")
//el for es igual que en java con la pequeña diferencia de usar let
for (let i = 0; i < listaTareas.length;i++){
    lista.innerHTML += "<li>" + texto.value+"</li >"
}
//en esta comilla "`"todo lo de dentro lo trata como string al cerrarla "`"
//luego tambien nos llega la necesidad de borrar algo y eso se haria con 
}