function crearTexto(){
  var texto = 'Hola soy un texto'
}

crearTexto()
alert(texto)
var texto = 'Soy una variable global'
function crearTexto(){
  alert(texto);
}
crearTexto()
function crearTexto(){
  texto = 'Hola soy un texto Global sin VAR'
}

crearTexto()
alert(texto)

var mensaje = 'Este es un primer mensaje'
function verMensaje(){
  alert(mensaje);
  var mensaje = 'Este es un segundo mensaje'
  alert(mensaje)
}

verMensaje()
