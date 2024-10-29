import Player from "./classes/Player.js"

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")

canvas.width = innerWidth
canvas.height = innerHeight

const player = new Player()

ctx.fillStyle = 'red'
ctx.fillRect(player.position.x, player.position.y, player.width, player.height)