let numSecreto = Math.floor(Math.random()* 100) + 1;
let intento = 0;
let opcionUsuario = 0
let haAdivinado = false;

while (!haAdivinado) {
    intento++;
opcionUsuario = parseInt(prompt("Adivina el numero secreto del 1 al 100:"));//prompt()muestra un cuadro de dialogo, pero recibe por defecto tipo TEXT
if(opcionUsuario == numSecreto) {
console.log(`el usuario aun no adivino en el intento ${intento}, nuemro secreto ${numSecreto} y opcion usuario`);
alert("Felicidades has adivinado el numero secreto " + numSecreto + " en " + intento + " intentos");
haAdivinado = true;
} else {
console.log(`el usuario aun no adivino en el intento ${intento}, nuemro secreto ${numSecreto} y opcion usuario`);
alert("Ops no has adivinado el numero secreto " + numSecreto + " en " + intento + " intentos");
haAdivinado = false;
}
}