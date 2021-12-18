let btnbolita = document.querySelector('.contenedorchatbot');

btnbolita.addEventListener('click',aparece);

function aparece() {
    let cuadrochatbot = document.querySelector('.cuadrochatbot');
  
    cuadrochatbot.setAttribute('style','display:block');
}



let btncerrar = document.querySelector('.btncerrar');

btncerrar.addEventListener('click', desaparecer);

function desaparecer() {
    let cuadrochatbot = document.querySelector('.cuadrochatbot');
   
    cuadrochatbot.setAttribute('style','display:none');
}


//ENTER para mandar texto
let encriturainput = document.querySelector('.mensajes');
encriturainput.addEventListener('keyup', tecleado);

function tecleado (event){
    if( event.key === "Enter")
    {
     agregartexto();       
    }
} 

//selecciona boton envar
let btnenviar = document.querySelector('.btnenviar');
btnenviar.addEventListener('click', agregartexto);



function agregartexto () {
    //USUARIO
    //seleccionar la caja de texto
    let cajamensajes = document.querySelector('.mensajes');
    //obtenemos el texto de la caja
    let textopregunta = cajamensajes.value;
    //borrar el texto de input
    cajamensajes.value = "";
    
    let contenedorchat= document.querySelector('.chatchatbot');

    let parrafonuevo = document.createElement('h3');

    parrafonuevo.className = 'mensajeusuario';

    parrafonuevo.innerHTML = "Tú: "+ textopregunta;

    contenedorchat.appendChild(parrafonuevo);

    //IA
    let parrafoIA = document.createElement('h3');
    parrafoIA.innerHTML = "IA: "+ IA(textopregunta);

    contenedorchat.appendChild(parrafoIA);
   
    contenedorchat.scrollTop = contenedorchat.scrollHeight;//linea de codigo para que se ponga hacia abajo
}




function IA(pregunta){


    //Pregunta 1
    let edadpregunta = /(años[a-z\s]*tienes)/gi;
    if( edadpregunta.test(pregunta)){
        return "Tengo unos dias de haber nacido";
    }
    //Pregunta 2
    let nombrepregunta = /tu[a-z\s]*nombre/gi;
    if( nombrepregunta.test(pregunta)){
        return "Mi nombre es ChuchoBOT";
    }
    //pregunta 3
    let libropregunta = /cual[a-z\s]*libro[a-z\s]*favorito/gi;
    if (libropregunta.test(pregunta) ){
        return "Caballo de Troya la saga completa";
    }
    //pregunta 4
    let peliculapregunta = /cual[a-z\s]*pelicula[a-z\s]*favorita/gi;
    if (peliculapregunta.test(pregunta) ){
        return "Forest Gump";
    }
    //pregunta 5
    let Colorpregunta = /cual[a-z\s]*color[a-z\s]*favorito/gi;
    if (Colorpregunta.test(pregunta) ){
        return "Gris oscuro";

    }
    //Pregunta 6
    let nombre2pregunta = /te[a-z\s]*llamas/gi;
    if( nombre2pregunta.test(pregunta)){
        return "Mi nombre es ChuchoBOT";
    }

    //Pregunta 6
    let Felizpregunta = /eres[a-z\s]*feliz/gi;
    if( Felizpregunta.test(pregunta)){
        return "Si fueras mi amigo seria feliz";
    }

     //Pregunta 7
    let holapregunta = /hola*/gi;
     if( holapregunta.test(pregunta)){
        return "hola";
    }


    //aqui la magia de la IA
    return "lo siento no entendi tu pregunta";
}




