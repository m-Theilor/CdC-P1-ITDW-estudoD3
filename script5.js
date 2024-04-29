function converter () {
    let numero = parseFloat (document.querySelector (".numero_digitado").value);
    let resultado = document.querySelector (".resultado");
    let conversao = numero*100;
    
    resultado.innerHTML = `A medida em Centímetros é: ${conversao} cm`
}