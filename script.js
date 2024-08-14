const buttonEncriptar = document.querySelector("#buttonEnc");
const buttonDesencriptar = document.querySelector("#buttonDesc");
const buttonCopiar = document.querySelector("#buttonCop");
const mensaje = document.querySelector("#msg");
let letter = "";
const mensajeEncriptado = [];
let mensajeamostrar = "";
mensaje.value = mensajeamostrar;

function verificar(letra) {
    letter = letra;
    switch (letter) {
        case "a":
            letter = "ai";
            break;
        case "e":
            letter = "enter";
            break;
        case "i":
            letter = "imes";
            break;
        case "o":
            letter = "ober";
            break;
        case "u":
            letter = "ufat";
            break;
    }
}

function encriptar() {
    const cadena = document.querySelector("#input-texto");
    const cadenaMensaje = cadena.value;
    const cadenaArreglo = Array.from(cadenaMensaje);

    if (cadena.value !== "") {
        for (let contador = 0; contador < cadenaArreglo.length; contador++) {
            verificar(cadenaArreglo[contador]);
            mensajeEncriptado.push(letter);
        }
        mensajeamostrar = mensajeEncriptado.join("");
        mensaje.value = mensajeamostrar;
    } else {
        alert("Introduzca un mensaje a encriptar.");
    }
    mensajeEncriptado.length = 0;
}

function desencriptar() {
    const mensajeadesencriptar = document.querySelector("#input-texto");
    const cadenamensajeadesencriptar = mensajeadesencriptar.value;

    if (mensajeadesencriptar.value !== "") {
        console.log("Botón funciona");

        const arr = Array.from(cadenamensajeadesencriptar);
        console.log(arr);

        const arreglo = [];

        for (let contador = 0; contador < arr.length - 1; contador++) {
            arreglo.push(arr[contador] + arr[contador + 1]);
        }

        console.log(arreglo);

        const arreglofinal = [];
        let encontrado = 0;

        for (let conteo = 0; conteo <= arreglo.length - encontrado; conteo++) {
            if (arreglo[conteo + encontrado] === "ai") {
                arreglofinal[conteo] = "a";
                encontrado += 1;
            } else {
                arreglofinal[conteo] = arr[conteo + encontrado];
            }
        }

        console.log(arreglofinal);

        const arreglo1 = [];
        for (let contador = 0; contador < arreglofinal.length - 3; contador++) {
            arreglo1.push(arreglofinal[contador] + arreglofinal[contador + 1] + arreglofinal[contador + 2] + arreglofinal[contador + 3]);
        }

        console.log(arreglo1);

        const arreglofinal1 = [];
        encontrado = 0;

        for (let conteo = 0; conteo < arreglofinal.length - encontrado; conteo++) {
            if (arreglo1[conteo + encontrado] === "ober" || arreglo1[conteo + encontrado] === "ufat" || arreglo1[conteo + encontrado] === "imes") {
                switch (arreglo1[conteo + encontrado]) {
                    case "ober":
                        arreglofinal1[conteo] = "o";
                        break;
                    case "ufat":
                        arreglofinal1[conteo] = "u";
                        break;
                    case "imes":
                        arreglofinal1[conteo] = "i";
                        break;
                }
                encontrado += 3;
            } else {
                arreglofinal1[conteo] = arreglofinal[conteo + encontrado];
            }
        }

        console.log(arreglofinal1);

        const arreglo2 = [];
        for (let contador = 0; contador < arreglofinal1.length - 4; contador++) {
            arreglo2.push(arreglofinal1[contador] + arreglofinal1[contador + 1] + arreglofinal1[contador + 2] + arreglofinal1[contador + 3] + arreglofinal1[contador + 4]);
        }

        console.log(arreglo2);

        const arreglofinal2 = [];
        encontrado = 0;

        for (let conteo = 0; conteo < arreglofinal1.length - encontrado; conteo++) {
            if (arreglo2[conteo + encontrado] === "enter") {
                arreglofinal2[conteo] = "e";
                encontrado += 4;
            } else {
                arreglofinal2[conteo] = arreglofinal1[conteo + encontrado];
            }
        }

        console.log(arreglofinal2);
        const mensajedesencriptado = arreglofinal2.join("");
        mensaje.value = mensajedesencriptado;
    } else {
        alert("Introduzca mensaje a desencriptar");
    }
}

function copiar() {
    let s = window.getSelection().toString();

    if (s) {
        document.execCommand('copy');
    } else {
        mensaje.select();
        document.execCommand('copy');
    }
}

buttonEncriptar.onclick = encriptar;
buttonDesencriptar.onclick = desencriptar;
buttonCopiar.onclick = copiar;
