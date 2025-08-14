let secretMode = false;

function toggleSecretMode() {
    secretMode = !secretMode;
    const secrets = document.querySelectorAll('.secreto');

    secrets.forEach(el => {
        el.style.display = secretMode ? 'block' : 'none';
    });
}

// SHIFT + S ativa/desativa
document.addEventListener('keydown', e => {
    if (e.shiftKey && e.key.toLowerCase() === 's') {
        toggleSecretMode();
    }
});


