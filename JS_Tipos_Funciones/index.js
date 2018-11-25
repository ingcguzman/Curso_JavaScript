
/* Funciones

setInterval(function(){console.log('Mensaje Reptitivo');},2000);
setTimeout(function(){console.log('Mensaje despues de una espera');},2000);

function Personalizada(numero1, numero2, funcion2){
  var resultado = numero1 + numero2;
  funcion2(resultado);
}

Personalizada(5,12, function(resultado){alert(resultado);});


(function(nombre, apellido){
  console.log(nombre + ' ' + apellido);
})('Carlos', 'Guzman');
// Respuestas

// Funciones autoejecutables
(function(){
  console.log(this);
})();

(function(){
  this.variable1 = "Hola Carlos";
})();

console.log(window.variable1);*/


var myObject ={
  property: 'Hola Carlos',
  func: function(){
    return this.property;
  }
};
console.log(myObject.func());
