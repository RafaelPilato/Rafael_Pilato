const dataAtual = new Date();
const hora = dataAtual.getHours();

const mensagem = document.createElement('div');

if(hora > 6 && hora < 12){
    mensagem.textContent = 'Bom dia!';
}else if(hora >= 12 && hora < 18){
    mensagem.textContent = 'Boa tarde!';
}else{
    mensagem.textContent = 'Boa noite!';
}

let corAtual = 0;
setInterval(() => {
    const cores = ['#000000','#DCDCDC','#000080','#0000FF','#008000','#DAA520','#A020F0','#FF1493','#FF0000','#FFFFE0'];
    mensagem.style.backgroundColor = cores[corAtual];
    corAtual = (corAtual + 1) % cores.length;
}, 1000);

mensagem.style.padding = '10px';
mensagem.style.position = 'fixed';
mensagem.style.bottom = '20px';
mensagem.style.right = '20px';
mensagem.style.borderRadius = '5px';
mensagem.style.zIndex = '9999';

document.body.appendChild(mensagem);

const menuLinks = document.querySelectorAll(".menu a");

function getDistanceFromTheTop(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

function nativeScroll(distanceFromTheTop) {
    window.scroll({
        top: distanceFromTheTop,
        behavior: "smooth"
    });
}

function scrollToSection(event) {
    event.preventDefault();
    const distanceFromTheTop = getDistanceFromTheTop(event.target) - 90;
    nativeScroll(distanceFromTheTop);
}

menuLinks.forEach((link) =>{
    link.addEventListener("click", scrollToSection);
});