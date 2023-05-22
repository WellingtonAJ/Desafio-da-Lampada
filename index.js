var lamp = document.getElementById('lampada')

function estaQuebrada(){
    return lamp.src.indexOf('quebrada') > -1
}

function Ligar(){
    if (!estaQuebrada()){
    lamp.src = './imagens/acessa.svg'}
}

function Desligar(){
    if (!estaQuebrada()){
    lamp.src = './imagens/apagada.svg'}
}

function Quebrar(){
    lamp.src = './imagens/quebrada.svg'
}