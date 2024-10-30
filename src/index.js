import Player from "./classes/Player.js"

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")

canvas.width = innerWidth
canvas.height = innerHeight

const player = new Player(canvas.width, canvas.height)

const keys = {
  left: false,
  right: false,
  top: false,
  bottom: false
}

const gameLoop = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (keys.left) {
    player.position.x -= 6;
  }

  if (keys.right) {
    player.position.x += 6;
  }

  if (keys.top) {
    player.position.y -= 6;
  }

  if (keys.bottom) {
    player.position.y += 6;
  }

  if (player.position.y < 30) {
    player.position.y = 30;
  }

  if (player.position.y > canvas.height - player.height - 30) {
    player.position.y = canvas.height - player.height - 30;
  }

  player.draw(ctx);

  requestAnimationFrame(gameLoop);
}

gameLoop();

addEventListener('keydown', (ev) => {
  const key = ev.key.toLowerCase();

  if (key === 'a') {
    keys.left = true;
  }

  if (key === 'd') {
    keys.right = true;
  }

  if (key === 'w') {
    keys.top = true;
  }
  
  if (key === 's') {
    keys.bottom = true;
  }
});

addEventListener('keyup', (ev) => {
  const key = ev.key.toLowerCase();

  if (key === 'a') {
    keys.left = false;
  }

  if (key === 'd') {
    keys.right = false;
  }

  if (key === 'w') {
    keys.top = false;
  }
  
  if (key === 's') {
    keys.bottom = false;
  }
});
