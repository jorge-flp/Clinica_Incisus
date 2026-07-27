document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todos os cards dos doutores
    const items = document.querySelectorAll('.item');

    // Configuração do leitor de scroll (Intersection Observer)
    const observerOptions = {
        root: null,
        threshold: 0.15 // Ativa o fade in quando 15% do elemento entra na tela
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe que faz o elemento surgir suavemente
                entry.target.classList.add('visible');
                // Para de observar o item depois que ele já apareceu
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Aplica o observador em cada doutor da lista
    items.forEach(item => {
        observer.observe(item);
    });
});

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

// Abre e fecha o menu
menuToggle.addEventListener("click", (e) => {

    e.stopPropagation();

    menu.classList.toggle("active");

    if(menu.classList.contains("active")){
        menuToggle.innerHTML = "✕";
    }else{
        menuToggle.innerHTML = "☰";
    }

});

// Fecha ao clicar fora
document.addEventListener("click", () => {

    menu.classList.remove("active");
    menuToggle.innerHTML = "☰";

});

// Impede que clicar dentro do menu feche ele
menu.addEventListener("click", (e)=>{
    e.stopPropagation();
});

// Fecha ao clicar em qualquer link
document.querySelectorAll("#menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        menu.classList.remove("active");
        menuToggle.innerHTML="☰";

    });

});