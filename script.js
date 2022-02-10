const canvas = document.querySelector('#drawingCanvas');
const colorSelected = document.querySelector('#lineColor');
const clearBtnListener = document.querySelector('.clear-btn');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Window resize
window.onresize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

//mouse coordinates
const mouse = {
    x: 0,
    y: 0
}

//Getting mouse location from click event 
canvas.addEventListener('click', function(e) {
    mouse.x = e.x;
    mouse.y = e.y;
    draw();
})

//listening to mouse move event 
canvas.addEventListener('mousemove', function(e) {
    mouse.x = e.x;
    mouse.y = e.y;
    draw();
})

//listening to color change event
let colorInput = colorSelected.value;
colorSelected.addEventListener('change', function(e) {
    colorInput = e.target.value;
})

//listening to clear screen button
clearBtnListener.addEventListener('click', function(e) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

//Draw functionality
function draw() {
    ctx.fillStyle = colorInput;
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 50, 0, 2 * Math.PI);
    ctx.fill();    
}