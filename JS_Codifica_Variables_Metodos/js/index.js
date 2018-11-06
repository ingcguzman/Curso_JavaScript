
document.getElementById('boton-perfil').addEventListener("click", function(){
  paciente.imprimirDatos();
})

/*-- Definición del objeto paciente */
var paciente = {
  nombre: "Carlos Augusto Guzmán Segura",
  ciudad: "Bogotá",
  entidad: "Compensar EPS",
  peso: 88.5,
  estatura: 1.80,
  fechaNacimiento : new Date('4/18/1964'),
/*-- Objeto anidado para la información de la última consulta */
  ultimaConsulta: {
    fechaUltimaConsulta: new Date(),
    anotacionesArray: ['El paciente no presenta sintomas de dolor en las cicatrices de la cirugia',
                           'Presión arterial media normal',
                           'Se mencionan repetidos dolores en la zona abdominal']
  },
  novedadClinica1: ['Fractura de Femur', '03/11/2015'],
  novedadClinica2: ['Apendicitis', '22/08/2015'],
  novedadClinica3: ['Insuficiencia Renal', '01/03/2015'],
  historiaClinica: [novedadClinica1, novedadClinica2, novedadClinica3],
/*-- Calcula la edad aproximada de la persona */
  Edad: function calcularEdad(){
    var fechaHoy : new Date();
    var años: fechaHoy.getfullyear() - fechaNacimiento.getfullyear();
    fechaNacimiento.setFullYear(fechaHoy.getFullyear());
    if(fechaHoy < fechaNacimiento){
      años--;
    }
    return años;
  }
/*-- Calcular el Indice de Masa Corporal */
  IMC: function calcularIMC(){
    var imc = peso / (estatura ^ 2);
    return imc;
  }
}
