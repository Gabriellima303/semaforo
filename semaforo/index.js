const vermelho = document.querySelector('.vermelho');
const amarelo = document.querySelector('.amarelo');
const verde = document.querySelector(".verde");

let contador = 1;

setInterval(() =>{
    if(contador <= 1) {
        vermelho.classList.add('vermelho-ativo');
    }else if(contador === 5){
        amarelo.classList.add('amarelo-ativo');
        vermelho.classList.remove('vermelho-ativo');
    }else if(contador === 10){
        verde.classList.add('verde-ativo');
        amarelo.classList.remove('amarelo-ativo');
    }else if(contador === 15){
        verde.classList.remove('verde-ativo');
        contador = 0;
    }
    contador += 1;
}, 1000);