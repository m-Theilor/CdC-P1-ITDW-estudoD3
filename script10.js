function conversao() {
    let valor = parseFloat (document.querySelector (".numero_digitado").value);
    let resultado = document.querySelector (".resultado");
    let tempF = (valor*(9/5)+32);

    resultado.innerHTML = `A temperatura em Graus Fahrenheit é: ${tempF}`;

}