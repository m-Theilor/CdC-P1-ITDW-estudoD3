function somar () {
    let numero1 = parseInt (document.querySelector (".numero1").value);
    let numero2 = parseInt (document.querySelector (".numero2").value);
    let soma = numero1 + numero2;
    
    let resultado = document.querySelector (".resultado");
    
    resultado.innerHTML = `A soma dos números digitados foi: ${soma}`
}