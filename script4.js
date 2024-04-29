function media () {
    let nota1 = parseFloat (document.querySelector (".nota1").value);
    let nota2 = parseFloat (document.querySelector (".nota2").value);
    let nota3 = parseFloat (document.querySelector (".nota3").value);
    let nota4 = parseFloat (document.querySelector (".nota4").value);
    let mediaNotas = (nota1 + nota2 + nota3 + nota4)/4;
    
    let resultado = document.querySelector (".resultado");
    
    resultado.innerHTML = `A média das notas é: ${mediaNotas}`
}