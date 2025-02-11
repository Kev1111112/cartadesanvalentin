function openCard() {
    const card = document.querySelector('.card');
    card.classList.toggle('open');
}

function showMessage() {
    const heartsContainer = document.getElementById('hearts-container');
    const messageContainer = document.getElementById('message-container');
    const buttons = document.getElementById('buttons');
    const card = document.querySelector('.card');

    // Ocultar la carta y los botones
    card.style.display = 'none';
    buttons.style.display = 'none';

    // Mostrar corazones (opcional)
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        heartsContainer.appendChild(heart);
    }

    // Mostrar el mensaje "💕💕GRACIAS MI HERMOSA ALERIIIIII💕💕"
    messageContainer.innerHTML = "💕💕GRACIAS MI HERMOSA ALERIIIIII💕💕";
    messageContainer.style.display = "block";
}

function moveNoButton() {
    const noButton = document.querySelector('.buttons button:last-child');
    const yesButton = document.getElementById('yes-button');

    // Mover el botón "No" a una posición aleatoria
    const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';

    // Hacer crecer el botón "Sí"
    yesButton.classList.add('grow-button');
    setTimeout(() => {
        yesButton.classList.remove('grow-button');
    }, 500); // Duración de la animación
}