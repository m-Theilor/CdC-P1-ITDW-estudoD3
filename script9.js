function conversao() {
    let valor = parseFloat (document.querySelector (".numero_digitado").value);
    let resultado = document.querySelector (".resultado");
    let tempC = 5*((valor-32)/9);

    resultado.innerHTML = `A temperatura em Graus Celsius é: ${tempC}`;

}