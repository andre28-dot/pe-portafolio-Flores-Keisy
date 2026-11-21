function contarCaracteres(cadena: string): number {
    // Si la cadena esta vacia, ya no hay caracteres que contar
    if (cadena === "") {
        return 0;
    }
    // Quito el primer caracter y cuento los que quedan
    return 1 + contarCaracteres(cadena.substring(1));
}

const codigo = "UNIVO2026";
const cantidad = contarCaracteres(codigo);

console.log("Codigo:", codigo);
console.log("Cantidad de caracteres:", cantidad);

/*
Resultado esperado:
Codigo: UNIVO2026
Cantidad de caracteres: 9

Mi explicacion:
En cada llamada envio la misma cadena, pero sin su primer caracter,
utilizando substring(1)

Por ejemplo:

UNIVO2026
NIVO2026
IVO2026
VO2026
O2026
2026
026
26
6
""

Prediccion: el codigo UNIVO2026 tiene 9 caracteres.

El proceso termina cuando la cadena queda vacia, porque ese es
mi caso base y la funcion devuelve 0, mientras tanto, cada llamada
va sumando 1 por el caracter que se va quitando.
*/
