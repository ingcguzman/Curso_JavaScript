/*-- Definición de la función que calcula el área deñ triangulo */
function areaTriangulo(){
  var a=0, b=0, h=0;
  b= prompt("Ingrese la base (b) del triangulo");
  h= prompt("Ingrese la altura (h) del triangulo");
  a = (b*h)/2
  alert("El área del triangulo es: " + a);
}

/*-- Invocamos la función para que se ejecute */
areaTriangulo();
