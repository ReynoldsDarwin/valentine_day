const envelope = document.querySelector('.envelope');
const heartSeal = document.querySelector('.heart-seal');
const tapMessage = document.querySelector('.tap-message');
let timeoutId;
let messageTimeoutId;
let isOpen = false;

// Función para dispositivos de escritorio (hover)
envelope.addEventListener('mouseover', () => {
    clearTimeout(timeoutId);
    clearTimeout(messageTimeoutId);
    
    // Ocultar inmediatamente
    heartSeal.style.opacity = 0;
    if (tapMessage) {
        tapMessage.style.opacity = 0;
    }
    isOpen = true;
});

envelope.addEventListener('mouseout', () => {
    timeoutId = setTimeout(() => {
        heartSeal.style.opacity = 1;
        isOpen = false;
    }, 1500);
    
    // Esperar más tiempo para mostrar el mensaje nuevamente
    messageTimeoutId = setTimeout(() => {
        if (tapMessage) {
            tapMessage.style.opacity = 1;
        }
    }, 2500);
});

// Función para dispositivos táctiles (click/tap)
envelope.addEventListener('click', () => {
    clearTimeout(messageTimeoutId);
    
    if (!isOpen) {
        envelope.classList.add('active');
        heartSeal.style.opacity = 0;
        if (tapMessage) {
            tapMessage.style.opacity = 0;
        }
        isOpen = true;
    } else {
        envelope.classList.remove('active');
        setTimeout(() => {
            heartSeal.style.opacity = 1;
            isOpen = false;
        }, 1500);
        
        // Esperar más tiempo para mostrar el mensaje nuevamente
        messageTimeoutId = setTimeout(() => {
            if (tapMessage) {
                tapMessage.style.opacity = 1;
            }
        }, 2500);
    }
});

// Transiciones suaves
heartSeal.style.transition = 'opacity 0.3s ease';
if (tapMessage) {
    tapMessage.style.transition = 'opacity 0.5s ease';
}