const calificaciones: number[] = [8.5, 9.0, 7.5, 10, 8.0];
console.log("REPORTE DE CALIFICACIONES");
// Utilizo forEach para mostrar cada nota con el mismo formato
calificaciones.forEach((nota) => {
    console.log("Calificacion obtenida:", nota.toFixed(2));
});

/*
Explicacion:
Utilice forEach porque necesito realizar una accion con cada nota,
en este caso mostrarla en consola con un mensaje uniforme,
toFixed(2) me permite presentar cada calificacion con dos decimales
*/