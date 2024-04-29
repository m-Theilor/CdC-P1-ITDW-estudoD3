function area() {
    let raio = parseFloat (document.querySelector (".numero_digitado").value);
    let resultado = document.querySelector (".resultado");
    let areaCirculo = raio*raio*3.14;
    
    resultado.innerHTML = `A área do círculo é: ${areaCirculo} cm2`
}