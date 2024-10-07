'use strict';

document.addEventListener('DOMContentLoaded', () => {
    console.log('O site está pronto!');

    // Função para animação suave ao clicar em links do menu
    const smoothScroll = (target) => {
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    // Adiciona a função de rolagem suave ao menu de navegação
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.target.getAttribute('href');
            smoothScroll(target);
        });
    });

    // Função para alertar ao clicar no botão de contato
    const contactBtn = document.querySelector('.contact .btn');
    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            alert('Obrigado por entrar em contato!');
        });
    }

    // Alternativa de menu ativo ao clicar
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
        });
    });
});
