document.addEventListener('DOMContentLoaded', () => {
    // Función para mostrar las secciones al hacer scroll
    const sections = document.querySelectorAll('section');
    const options = {
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Añade la animación de rebote a los iconos sociales
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.classList.add('animate-bounce-hover');
        });
        icon.addEventListener('mouseleave', () => {
            icon.classList.remove('animate-bounce-hover');
        });
    });

    // Añade el estilo para la animación de rebote del mouse
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = `@keyframes bounce-hover {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.2); }
    }
    .animate-bounce-hover {
        animation: bounce-hover 0.5s ease-in-out;
    }`;
    document.head.appendChild(styleSheet);
});