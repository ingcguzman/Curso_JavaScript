/*-- Definición de un objeto --*/
var estudiante = {
  nombre: "Carlos",
  curso: 7,
  matematicas: 6,
  ciencias: 8,
  ingles: 9,
  obtenerNombre: function(){
    return this.nombre;
  },
  obtenerPromedio: function(){
    var promedio = (this.matematicas + this.ciencias + this.ingles) / 3;
    return promedio;
  }
};
