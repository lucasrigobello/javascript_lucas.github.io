// Funções repetidas

function tocaSomPom (){
    document.querySelector('#som_tecla_video').play();  
}
document.querySelector('.tecla_play').onclick = tocaSomPom;

function tocaSomPause (){
    document.querySelector('#som_tecla_video').pause();
}
document.querySelector('.tecla_pause').onclick = tocaSomPause;
