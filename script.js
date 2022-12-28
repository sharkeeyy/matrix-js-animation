const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const screen = new Screen(canvas.width, canvas.height, 25);

// let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
// gradient.addColorStop(0, 'red');
// gradient.addColorStop(0.2, 'yellow');
// gradient.addColorStop(0.4, 'green');
// gradient.addColorStop(0.6, 'blue');
// gradient.addColorStop(0.8, 'cyan');
// gradient.addColorStop(1, 'magenta');

const FPS = 30;
const nextFrame = 1000 / FPS;
let lastTime = 0;
let timer = 0;


function animate(timeStamp) {
  const deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;

  if (timer > nextFrame) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.textAlign = 'center';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // ctx.fillStyle = gradient;
    ctx.font = screen.fontSize + 'px monospace';
    screen.symbols.forEach(symbol => symbol.draw(ctx));
    timer = 0;
  } else {
    timer += deltaTime;
  }

  requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  screen.resize(canvas.width, canvas.height);
});

animate(0);