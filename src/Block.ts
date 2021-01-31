import { p } from './main'

class Block {
  get x(): number {
    return this._x
  }

  set x(value: number) {
    this._x = value
  }

  get y(): number {
    return this._y
  }

  set y(value: number) {
    this._y = value
  }
  private _x: number
  private _y: number
  public constructor(x: number, y: number) {
    this._x = x
    this._y = y
  }
  public draw() {
    p.push()
    const s = 25
    p.rect(s * this._x, s * this._y, s, s)
    p.pop()
  }
}

export { Block }
