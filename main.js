/*
// Função automatizada para todas as teclas
function tocaSomPom (idElemento){
    const elemento = document.querySelector(idElemento);
    
    if (elemento && elemento.localName === 'audio') {
        elemento.play()
    }
    else {
        alert("Elemento não encontrado")
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const instrument = listaDeTeclas[contador].classList[1];

    listaDeTeclas[contador].onclick = function () {
        tocaSomPom(`#som_${instrument}`)
    }

    listaDeTeclas[contador].onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            listaDeTeclas[contador].classList.add('ativa')
        }
    }

    listaDeTeclas[contador].onkeyup = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            listaDeTeclas[contador].classList.remove('ativa')
        }
    }
}
*/

// Whilhe
/*
let contador = 0;
while (contador < listaDeTeclas.length) {

    const instrument = listaDeTeclas[contador].classList[1];

    listaDeTeclas[contador].onclick = function () {
        tocaSomPom(`#som_${instrument}`)
    }
    contador = contador + 1;
}
*/

// Funções repetidas

function tocaSomPom (){
    document.querySelector('#som_tecla_pom').play();  
}
document.querySelector('.tecla_pom').onclick = tocaSomPom;

function tocaSomPause (){
    document.querySelector('#som_tecla_pom').pause();
}
document.querySelector('.tecla_clap').onclick = tocaSomPause;
/*

function tocaSomClap (){
    document.querySelector('#som_tecla_clap').play();  
}
document.querySelector('.tecla_clap').onclick = tocaSomClap;


function tocaSomTim (){
    document.querySelector('#som_tecla_tim').play();  
}
document.querySelector('.tecla_tim').onclick = tocaSomTim;


function tocaSomPuff (){
    document.querySelector('#som_tecla_puff').play();  
}
document.querySelector('.tecla_puff').onclick = tocaSomPuff;


function tocaSomSplash (){
    document.querySelector('#som_tecla_splash').play();  
}
document.querySelector('.tecla_splash').onclick = tocaSomSplash;


function tocaSomToim (){
    document.querySelector('#som_tecla_toim').play();  
}
document.querySelector('.tecla_toim').onclick = tocaSomToim;


function tocaSomPsh (){
    document.querySelector('#som_tecla_psh').play();  
}
document.querySelector('.tecla_psh').onclick = tocaSomPsh;


function tocaSomTic (){
    document.querySelector('#som_tecla_tic').play();  
}
document.querySelector('.tecla_tic').onclick = tocaSomTic;


function tocaSomTom (){
    document.querySelector('#som_tecla_tom').play();  
}
document.querySelector('.tecla_tom').onclick = tocaSomTom;
*/