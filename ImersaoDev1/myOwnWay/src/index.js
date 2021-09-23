// função recebe input do usuario
function recebeValores(nota1, nota2, nota3, nota4) {
    return [parseFloat(document.querySelector(nota1).value), parseFloat(document.querySelector(nota2).value), parseFloat(document.querySelector(nota3).value), parseFloat(document.querySelector(nota4).value)]
}

// função calcula media
function CalcularMedia() {
    const soma = recebeValores(".PrimeiroTxfGrade", ".SegundoTxfGrade", ".TerceiroTxfGrade", ".QuartoTxfGrade")
    let resultadoSoma = soma.reduce((total, currentElement) => total + currentElement) / 4
    return parseFloat(resultadoSoma.toFixed(1))
}

// função clique botao
function calculateButton() {
    const button = document.getElementById("button")
    button.addEventListener("click", MostrarResultado)
}

// função mostrar resultado botao
function MostrarResultado() {
    var label = document.querySelector(".formulario__label")
    label.textContent = parseFloat(CalcularMedia())
}

document.addEventListener("DOMContentLoaded", calculateButton, false);

console.log(CalcularMedia())