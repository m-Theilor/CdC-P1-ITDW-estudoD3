function calcular () {
    let valor = parseFloat (document.querySelector (".valor").value);
    let horas = parseFloat (document.querySelector (".horas").value);
    let salario = valor*horas;
    
    let resultado = document.querySelector (".resultado");
    
    resultado.innerHTML = `O salário recebido será de: R$${salario}`
}