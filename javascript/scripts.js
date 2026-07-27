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

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});