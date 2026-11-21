const estudiantes: string[] = [
    "Sofia",
    "Carlos",
    "Valeria",
    "Daniel",
    "Camila"
];
// Utilizo un for tradicional para recorrer las posiciones
for (let i = 0; i < estudiantes.length; i++) {
    console.log("Numero de lista:", i + 1, "- Estudiante:", estudiantes[i]);
}
/*
Explicacion:
El arreglo comienza desde el indice 0, pero para las personas
es mas comprensible que la lista comience desde el numero 1,
por eso utilizo i + 1 para mostrar el numero de lista correcto
*/