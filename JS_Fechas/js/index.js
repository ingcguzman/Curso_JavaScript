var fecha = new Date(64, 7, 19);
var dias_semana = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"]
fecha.setFullYear(64);
console.log("Año: " + fecha.getUTCFullYear());
console.log("Mes: " + fecha.getMonth());
console.log("Dia: " + fecha.getUTCDate());
console.log("Dia de la semana: " + dias_semana[fecha.getDay()]);
