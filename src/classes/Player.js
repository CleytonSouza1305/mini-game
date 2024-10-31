export default class Player {

  constructor(canvasWidth, canvasHeight) {
    this.width = 100
    this.height = 100
    this.velocity = 6
    this.position = {
      x: canvasWidth / 2 - this.width / 2,
      y: canvasHeight - this.height - 30
    }
    this.image
  }

  getImage() {
    const image = new Image()
    image.src = ""
    return image
  }

  moveLeft() {
    this.position.x -= this.velocity;
  }

  moveRight() {
    this.position.x += this.velocity;
  }

  moveTop() {
    this.position.y -= this.velocity;
  }

  moveBottom() {
    this.position.y += this.velocity;
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