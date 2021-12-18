//seleccion de elemento
let filas = document.querySelectorAll('.fila'); //array

filas[0].addEventListener('mouseover', function(){cambiar('img/descarga.jpg','Caballo de Troya')} );
filas[1].addEventListener('mouseover', function(){cambiar('img/forest.jpg','Codigo Da Vinci')} );
filas[2].addEventListener('mouseover', function(){cambiar('img/blade.jpg','Los Demonios del Eden')} );
filas[3].addEventListener('mouseover', function(){cambiar('img/Matrix.jpg','Los Señores del Narco')} );
filas[4].addEventListener('mouseover', function(){cambiar('img/watch.jpg','Cancion de Hielo y fuego')} );
filas[5].addEventListener('mouseover', function(){cambiar('img/shaolin.jpg','El Oscuro Pasajero')} );


function cambiar (ruta, titulo) {
    //seleccionar lo que queremos cambiar en este caso la imagen
  let contenedorimg = document.querySelector('.contenedorimagen img');
  contenedorimg.src = ruta;

  let contenedortexto = document.querySelector('.contenedorimagen h4');
  contenedortexto.textContent = titulo;

}

///////////////////////////////////////////////////////////////////////////////
let btnagregar = document.querySelector('.btnagregar');
let btneliminar = document.querySelector('.btneliminar');

btnagregar.addEventListener('click',agregar);
btneliminar.addEventListener('click',eliminar);



function agregar(){
    //pedir datos
    let pelicula = prompt('¿Que libro haz leido?');
    let calificacion = prompt('¿Cual es su autor?');
    let ruta = prompt('url de la imagen=');    
    lettop = 1;
    

    let filanueva = document.createElement('tr'); // <tr></tr>
    filanueva.innerHTML =`<td>${top}<td>${pelicula}</td><td>${calificacion}</td>`;

    let tabla = document.querySelector('.tabla tbody');
    tabla.appendChild(filanueva);

    filanueva.addEventListener('mouseover', function(){cambiar(ruta,pelicula)} );
}


function eliminar (){

    let tabla = document.querySelector('.tabla tbody');
    let ultimafila = tabla.lastChild;
    ultimafila.remove();

}