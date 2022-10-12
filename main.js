// Funções repetidas

function tocaSomPom (){
    document.querySelector('#som_tecla_pom').play();  
}
document.querySelector('.tecla_pom').onclick = tocaSomPom;

function tocaSomPause (){
    document.querySelector('#som_tecla_pom').pause();
}
document.querySelector('.tecla_clap').onclick = tocaSomPause;
