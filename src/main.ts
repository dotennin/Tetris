import p5 from 'p5'
import { Game } from './Game'
import { KeyCode } from './keyCode'

const game = new Game()
const sketch = (p: p5) => {
  p.preload = () => {}

  p.setup = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
  }

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
  }

  p.draw = () => {
    p.background(100)
    game.proc()
  }
  p.mousePressed = () => {
    p.clear()
  }

  p.keyPressed = () => {
    const keyCode: KeyCode = p.keyCode
    switch (keyCode) {
      case KeyCode.A:
        game.minoVx = -1
        break
      case KeyCode.D:
        game.minoVx = 1
        break
      case KeyCode.S:
        break
      case KeyCode.SPACE:
        game.minoVr += 1
        break
      default:
      // console.log(p.keyCode)
    }
  }
}

// window.game = game

export const p = new p5(sketch)
