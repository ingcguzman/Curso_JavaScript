
// Funciones
function alertaMensaje(nombre, edad, estatura){
  alert("Mi nombre es "+ nombre + ' tengo '+ edad+ 'años y mido '+estatura +' mts')
}

function alertaMensaje2(nombre, edad, estatura){
  var mensaje = "Mi nombre es "+ nombre + ' tengo '+ edad+ ' años y mido '+estatura +' mts'
  return mensaje
}

var Mensaje = alertaMensaje2('Luis',15, 1.34)


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
console.log(alertaMensaje2('Luis',15, 1.34))

// Respuestas
