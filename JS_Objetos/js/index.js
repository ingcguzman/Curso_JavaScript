/*-- Definición de un objeto para el cálculo de Indice de Masa Corporal con base en uno datos dados --*/
var persona = {
  nombre: " ",
  edad: 0,
  peso: 0,
  estatura: 0,
  IMC: function calcIMC(pes, est) {
    var imc = (pes / (est ^ 2));
    return imc
  }
}

/*-- Captura de los campos */
persona.nombre = prompt("ingrese el nombre");
persona.edad = Number(prompt("Ingrese la edad"));
var pesoPersona = Number(prompt("Ingrese el peso en Kg"));
var estaturaPersona = Number(prompt("Ingrese la estatura en m"));

/*-- Mostrar los datos en pantalla */
alert(persona.nombre + " tiene " + persona.edad + " años, pesa " + pesoPersona + " Kg y mide "
      + estaturaPersona + " mts y su IMC es " + persona.IMC(pesoPersona,estaturaPersona))
