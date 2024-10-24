document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', event => {
        const parent = item.parentNode;
        parent.classList.toggle('active'); // Adiciona ou remove a classe "active"
    });
});
