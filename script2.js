function inserir () {
    let numero = parseInt (document.querySelector (".numero_digitado").value);
    let resultado = document.querySelector (".resultado");
    
    resultado.innerHTML = `O número digitado foi ${numero}`
}