let currentModal = null;

function showModal(modal) {
    if (!modal) return;
    modal.classList.add('is-open');
    document.body.classList.add("stop-scrolling");
    currentModal = modal;
}

function closeModal(modal) {
    if (!modal) return;

    modal.classList.remove('is-open');
    document.body.classList.remove("stop-scrolling");

    if (currentModal === modal) {
        currentModal = null;
    }
}

// Abrir modal
document.querySelectorAll('.trigger-modal').forEach((trigger) => {
    trigger.addEventListener('click', () => {
        const target = trigger.dataset.modalname;
        const modal = document.getElementById(target);
        showModal(modal);
    });
});

// Cerrar al hacer click en overlay
document.querySelectorAll('.modal-overlay').forEach((overlay) => {
    overlay.addEventListener('click', () => {
        closeModal(overlay);
    });
});

// Evitar que click dentro del modal lo cierre
document.querySelectorAll('.modalbox').forEach((box) => {
    box.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});

// Botón de cerrar (SVG)
document.querySelectorAll('.close-modal').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const modal = btn.closest('.modal-overlay');
        closeModal(modal);
    });
});

// Cerrar con tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && currentModal) {
        closeModal(currentModal);
    }
});