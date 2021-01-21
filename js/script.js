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
            let downInterval = setInterval(() =>{
                if(position  <= 0) {
                    clearInterval(downInterval);
                } else {
                    position -= 15;
                    dino.style.bottom = position + 'px';
                }   
            }, 15);

        } else {
// Dino sobe
            position += 15;
            dino.style.bottom = position + 'px';
        }
    }, 15);
}

document.addEventListener('keyup', handlekeyUp);