const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;

//Acesse o site keycode.info e descubra o valor de keyCode de cada tecla
function handlekeyUp(event) {
    if (event.keyCode === 32) {
        if(!isJumping) {
            jump();
        }   
    }
};

function jump() {
    let position = 0;

    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 220) {
            clearInterval(upInterval);
// Dino desce
            let downInterval = setInterval(() =>{
                if(position  <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
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

function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);
     
    let leftInterval = setInterval(() => {
        cactusPosition -= 10;
        cactus.style.left = cactusPosition + 'px';
    }, 20)
}

createCactus();
document.addEventListener('keyup', handlekeyUp);