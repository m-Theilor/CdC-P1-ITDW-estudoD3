function area() {
    let lado = parseFloat (document.querySelector (".numero_digitado").value);
    let resultado = document.querySelector (".resultado");
    let areaQudrado = lado*lado;
    let dobro = 2*areaQudrado;
    
    resultado.innerHTML = `A área do Quadrado é: ${areaQudrado} cm2 e o seu Dobro é: ${dobro} cm2`
}