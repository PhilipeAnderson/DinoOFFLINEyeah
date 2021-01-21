const dino = document.querySelector('.dino');

//Acesse o site keycode.info e descubra o valor de keyCode de cada tecla
function handlekeyUp(event) {
    if (event.keyCode === 32) {
        jump();
    }
};

function jump() {
    let position = 0;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);
            // Dino desce
        } else {
            // Dino sobe
            position += 20;
            dino.style.bottom = position + 'px';
        }
    }, 20);
}

document.addEventListener('keyup', handlekeyUp);