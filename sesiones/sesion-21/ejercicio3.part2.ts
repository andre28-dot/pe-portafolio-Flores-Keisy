//FORMAS DE DECLARAR
const municipios1: string[] = ["San Miguel", "Usulutan", "La Union"];

const municipios2: Array<string> = ["San Miguel", "Usulutan", "La Union"];

console.log("Segundo municipio con string[]:", municipios1[1]);
console.log("Segundo municipio con Array:", municipios2[1]);

/*
Prediccion:
En los dos arreglos el segundo municipio sera Usulutan

Explicacion:
Las dos formas sirven para declarar arreglos de tipo string
personalmente me parece mas facil de leer string[]
porque es mas corta y puedo identificar rapidamente
que el arreglo va a guardar textos
*/
