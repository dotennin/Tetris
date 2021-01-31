import { Mino } from './Mino'
import { Field } from './Field'
import { p } from './main'
import { KeyCode } from './keyCode'

class Game {
  get dropDownTimer(): number {
    return this._dropDownTimer
  }

  set dropDownTimer(value: number) {
    this._dropDownTimer = value
  }
  get minoVr(): number {
    return this._minoVr
  }

  set minoVr(value: number) {
    this._minoVr = value
  }
  private _mino: Mino
  private _minoVx: number
  private _minoVr: number
  private _field: Field
  private _fc: number
  private _dropDownTimer: number
  public constructor() {
    this._mino = new Mino(5, 10, 0, Game.getRandomInt(5))
    this._minoVx = 0
    this._minoVr = 0
    this._field = new Field()
    this._fc = 0
    this._dropDownTimer = 0
  }

  public static isMinoMovable(mino: Mino, field: Field) {
    const blocks = mino.calcBlocks()
    return blocks.every(b => {
      return field.tileAt(mino.x + b.x, mino.y + b.y) === 0
    })
  }

  public static getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max))
  }

  private blockDrop(featureMino: Mino) {
    featureMino.y += 1
    if (Game.isMinoMovable(featureMino, this.field)) {
      this.mino.y += 1
    } else {
      // touchdown
      this.mino.calcBlocks().forEach(b => this.field.putBlock(this.mino.x + b.x, this.mino.y + b.y))
      this.mino = new Mino(5, 10, 0, 0)
      this.minoVx = 0
    }
  }

  public proc() {
    const featureMino = this.mino.copy()

    if (p.keyCode === KeyCode.S && p.keyIsPressed) {
      this.dropDownTimer += 1
    }
    if (this.dropDownTimer > 0 && this.dropDownTimer % 3 === 0) {
      this.blockDrop(featureMino)
      this.dropDownTimer = 0
    }
    // block drop
    if (this.fc % 20 === 0) {
      this.blockDrop(featureMino)
    }

    // left right movement
    if (this.minoVx !== 0) {
      featureMino.x += this.minoVx
      if (Game.isMinoMovable(featureMino, this.field)) {
        this.mino.x += this.minoVx
      }
      this.minoVx = 0
    }

    // rotation
    if (this.minoVr !== 0) {
      featureMino.rot = this.minoVr
      if (Game.isMinoMovable(featureMino, this.field)) {
        this.mino.rot += this.minoVr
      }
      this.minoVr = 0
    }

    this.mino.draw()
    this.field.draw()

    this.fc++
  }

  get minoVx(): number {
    return this._minoVx
  }

  set minoVx(value: number) {
    this._minoVx = value
  }

  get field(): Field {
    return this._field
  }

  set field(value: Field) {
    this._field = value
  }

  get fc(): number {
    return this._fc
  }

  set fc(value: number) {
    this._fc = value
  }
  get mino(): Mino {
    return this._mino
  }

  set mino(value: Mino) {
    this._mino = value
  }
}

export { Game }
