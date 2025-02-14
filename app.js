// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
let contador = 1; // Inicializamos un contador

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
   // let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

   
   ingresoAmigos = (document.getElementById('amigo').value);

   if (ingresoAmigos === ""  ) {
      alert("Debe Ingresar Nombre Valido!!!")
    
      } else {
           if (amigos.includes(ingresoAmigos)) {
                alert("Ese Amigo ya esta Registrado!!!") 
      }    else{
                amigos.push(ingresoAmigos);
                alert("Amigo Registrado") 
                asignarTextoElemento('p','Ya se sortearon todos los números posibles');
                CambiarTextoBoton()
               }
    
   }
   console.log(ingresoAmigos)
   console.log(amigos)
}


function CambiarTextoBoton() {
    // Cambiamos el texto del botón
    const boton = document.querySelector('.button-draw');
    boton.textContent = `Sortear amigo secreto ${contador}`;
    
    // Incrementamos el contador para la próxima vez
    contador++;
    
    // Aquí puedes agregar la lógica para el sorteo
    console.log("Sorteando amigo secreto...");
}






agregarAmigo()