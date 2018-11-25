
// Funciones
function alertaMensaje(nombre, edad, estatura){
  alert("Mi nombre es "+ nombre + ' tengo '+ edad+ 'años y mido '+estatura +' mts')
}

function suma(){
  if(arguments.length > 0){
    alert(arguments[0] + arguments[1])
  } else {
    alert('No se enviaron parametros')
  }
}

alertaMensaje('Carlos', 54, 1.80)

suma(12,13)
suma ()
// Respuestas
