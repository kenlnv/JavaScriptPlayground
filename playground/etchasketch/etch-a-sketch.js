// select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeBtn = document.querySelector('.shake');

// Setup canvas for drawing
const { width, height } = canvas;
const MOVE_AMOUNT = 10;
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
let hue = Math.floor(Math.random() * 360);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();
//write a draw function
function draw({key}) {
    console.log(key);
    hue += 3;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(x,y);

    switch (key) {
        case 'ArrowUp':
            y -= MOVE_AMOUNT;
            break;
        case 'ArrowDown':
            y += MOVE_AMOUNT;
            break;
        case 'ArrowLeft':
            x -= MOVE_AMOUNT;
            break;
        case 'ArrowRight':
            x += MOVE_AMOUNT;
            break;
        default:
            break;
    }
    ctx.lineTo(x, y);
    ctx.stroke();
}
//write a handler for keys
function handleKeys(e) {
    if(e.key.includes('Arrow')) {
        e.preventDefault();
        draw({key: e.key});
    };
}
// clear/shake function
function clearCanvas() {
    canvas.classList.add('shake');
    ctx.clearRect(0,0, width, height);
}

function handleShake(e) {
    if(e.type === 'click' || e.key === 'Enter') {
        clearCanvas();
    }
}
function handleTranform(e) {
    canvas.classList.remove('shake');
}
// listen for arrow keys
window.addEventListener('keydown', handleKeys);
shakeBtn.addEventListener('click', handleShake);
shakeBtn.addEventListener('keydown', handleShake);
canvas.addEventListener('animationend', handleTranform)