let pantalla = document.getElementById("pantalla");
let expresion = "";

function agregar(valor) {
    if (pantalla.innerText === "0" && valor !== ".") {
        expresion = valor;
    } else {
        expresion += valor;
    }
    pantalla.innerText = expresion;
}

function limpiar() {
    expresion = "";
    pantalla.innerText = "0";
}

function borrar() {
    expresion = expresion.slice(0, -1);
    pantalla.innerText = expresion || "0";
}

function calcular() {
    try {
        let resultado = eval(expresion);
        pantalla.innerText = resultado;
        expresion = resultado.toString();
    } catch {
        pantalla.innerText = "Error";
        expresion = "";
    }
}
