let coordenadas: [number, number] = [13.4833, -88.1833];

console.log("Latitud:", coordenadas[0]);
console.log("Longitud:", coordenadas[1]);

// Pruebo agregar un tercer valor para ver que sucede
// coordenadas.push(10);

// Pruebo cambiar el orden usando un texto
// coordenadas = ["San Miguel", -88.1833];

/*
Analisis:
La tupla solamente permite dos valores numericos
si intento agregar un tercer elemento o cambiar el orden
por un dato de otro tipo, TypeScript me mostrara un error

Esto sucede porque en una tupla cada posicion tiene
un tipo definido y tambien se establece su cantidad de elementos
*/
