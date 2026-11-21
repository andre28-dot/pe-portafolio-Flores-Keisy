type PagoTupla = [string, number, boolean];
interface PagoInterface {
    numeroCuenta: string;
    monto: number;
    solvente: boolean;
}

const pago1: PagoTupla = ["CU-2026", 25.50, true];

const pago2: PagoInterface = {
    numeroCuenta: "CU-2026",
    monto: 25.50,
    solvente: true
};

console.log("Pago con tupla:", pago1);
console.log("Pago con interface:", pago2);

/*
mi justificacion:

Considero que las tuplas son utiles cuando necesito guardar
pocos datos y ya tengo claro el orden en que deben ir
porque son mas cortas y faciles de escribir
Por ejemplo, para un registro pequeño de pago puedo utilizar
una tupla porque solamente necesito guardar el numero de cuenta
el monto y si la persona esta solvente
En cambio, una interface me parece mejor cuando el registro
tiene varios datos o cuando el programa va creciendo
porque cada dato tiene su propio nombre y es mas facil
saber que informacion estoy utilizando
Si utilizo una tupla y despues olvido el orden de los valores
puedo confundirme y cometer errores
Por eso utilizaria tuplas para datos pequeños y sencillos
y interfaces cuando necesite una estructura mas completa
y facil de mantener
*/
