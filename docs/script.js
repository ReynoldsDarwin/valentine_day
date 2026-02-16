const envelope = document.querySelector('.envelope');
const heartSeal = document.querySelector('.heart-seal');
const tapMessage = document.querySelector('.tap-message');
let messageTimeoutId;
let isOpen = false;

// Función para abrir la carta (click solo en el sobre)
envelope.addEventListener('click', (e) => {
    if (!isOpen) {
        e.stopPropagation(); // Evita que se propague al document
        
        // Abrir carta
        envelope.classList.add('active');
        envelope.classList.remove('closing');
        heartSeal.style.opacity = 0;
        if (tapMessage) {
            tapMessage.style.opacity = 0;
        }
        isOpen = true;
    }
});

// Función para cerrar la carta (click en cualquier lugar del documento)
document.addEventListener('click', (e) => {
    if (isOpen) {
        clearTimeout(messageTimeoutId);
        
        // Cerrar carta
        envelope.classList.remove('active');
        envelope.classList.add('closing');
        
        // Esperar a que termine la animación de cierre
        setTimeout(() => {
            envelope.classList.remove('closing');
            heartSeal.style.opacity = 1;
        }, 2000);
        
        messageTimeoutId = setTimeout(() => {
            if (tapMessage) {
                tapMessage.style.opacity = 1;
            }
        }, 2500);
        
        isOpen = false;
    }
});

// Transiciones suaves
heartSeal.style.transition = 'opacity 0.3s ease';
if (tapMessage) {
    tapMessage.style.transition = 'opacity 1.2s ease';
}