export default class Player {

  constructor(canvasWidth, canvasHeight) {
    this.width = 100
    this.height = 100
    this.position = {
      x: canvasWidth / 2 - this.width / 2,
      y: canvasHeight - this.height - 30
    }
  }

  moveLeft() {
    this.position.x -= 6;
  }

  moveRight() {
    this.position.x += 6;
  }

  moveTop() {
    this.position.y -= 6;
  }

  moveBottom() {
    this.position.y += 6;
  }

  draw(ctx) {
    ctx.fillStyle = 'red'
    ctx.fillRect(
      this.position.x, 
      this.position.y, 
      this.width, 
      this.height)
  }
}