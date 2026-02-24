document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.action-card');
    const container = document.querySelector('.container');

    // Subtle parallax effect on mouse move
    container.addEventListener('mousemove', (e) => {
        if (window.innerWidth > 768) {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        }
    });

    // Reset card position on mouse leave
    container.addEventListener('mouseleave', () => {
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        card.style.transition = 'all 0.5s ease';
    });

    container.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
    });

    // Add a simple entrance animation for the content
    const elements = [
        document.querySelector('.status-badge'),
        document.querySelector('.glitch-text'),
        document.querySelector('.subtitle'),
        document.querySelector('.action-card')
    ];

    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s`;
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100);
    });
});
