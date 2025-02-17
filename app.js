// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
let contador = 1; // Inicializamos un contador

//function asignarTextoElemento(elemento, texto) {
//    let elementoHTML = document.querySelector(elemento);
//    elementoHTML.innerHTML = texto;
//    return;
//}


function asignarTextoElemento(elemento, texto, color) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    elementoHTML.style.color = color; // Usa el parámetro "color" para definir el color del texto
    return;
}



function asignarTextoElementoLISTA(lista, texto) {
    let elementoHTML = document.createElement("li"); // Crear un <li> por cada elemento
    elementoHTML.textContent = texto; // Asignar el texto al <li>
    lista.appendChild(elementoHTML); // Agregar el <li> a la lista
}



function agregarAmigo() {
   // let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

   
   let ingresoAmigos = (document.getElementById('amigo').value);

   if (ingresoAmigos === ""  ) {
      alert("Debe Ingresar Nombre Valido!!!")
    
      } else {
           if (amigos.includes(ingresoAmigos)) {
                alert("Ese Amigo ya esta Registrado!!!") 
      }    else{
                amigos.push(ingresoAmigos);
                //alert("Amigo Registrado") 
                document.querySelector('#amigo').value = '';
                CambiarTextoBoton();
                CargaLista(amigos);
               }
    
   }
   console.log(ingresoAmigos)
   console.log(amigos)
}


function CambiarTextoBoton() {
   const boton = document.querySelector('.button-draw');
    
// Texto dinámico
    const texto = contador === 1 ? "va:" : "van:";
    boton.textContent = `Sortear amigo secreto (${texto}) ${contador} `;

// Incrementar el contador
    contador++;

    console.log("Sorteando amigo secreto...");

}




function CargaLista(array) {
   //Borro Lista HTML
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Elimina todo el contenido
    //Cargo Lista HTML
    for (let i = 0; i < array.length; i++) {
              
        asignarTextoElementoLISTA(listaAmigos, array[i]);
        
        console.log(array[i]);
    }
    
    
}


function sortearAmigo() {
    if (amigos.length < 3) {
        alert("Para Sortear deben ser Minimo 3 Personas!!!")
    } else {
        
        let numeroGenerado =  Math.floor(Math.random()*amigos.length);
        console.log(numeroGenerado);

        asignarTextoElemento("ul",amigos[numeroGenerado],"green")
        



    }



}





agregarAmigo()
sortearAmigo()