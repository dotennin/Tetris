import { Block } from './Block'

class Mino {
  public constructor(x: number, y: number, rot: number, shape: number) {
    this._x = x
    this._y = y
    this._rot = rot
    this._shape = shape
  }
  public calcBlocks() {
    let blocks
    switch (this.shape) {
      case 0:
        //T
        blocks = [new Block(-1, 0), new Block(0, 0), new Block(0, -1), new Block(1, 0)]
        break
      case 1:
        //I
        blocks = [new Block(0, 2), new Block(0, 1), new Block(0, 0), new Block(0, -1)]
        break
      case 2:
        //O
        blocks = [new Block(0, 0), new Block(0, 1), new Block(1, 0), new Block(1, 1)]
        break
      case 3:
        // J
        blocks = [new Block(-1, 0), new Block(0, 0), new Block(0, -1), new Block(0, -2)]
        break
      case 4:
        // L
        blocks = [new Block(0, 1), new Block(0, 0), new Block(0, -1), new Block(-1, -1)]
        break
      case 5:
        // S
        blocks = [new Block(0, 1), new Block(0, 0), new Block(-1, 0), new Block(-1, -1)]
        break
    }
    const rot = (40000000 + this._rot) % 4
    for (let r = 0; r < rot; r++) {
      // rotate 90
      blocks = blocks.map(b => new Block(-b.y, b.x))
    }
    return blocks
  }
  public draw() {
    const blocks = this.calcBlocks()
    blocks.forEach(b => {
      b.x += this.x
      b.y += this.y
      b.draw()
    })
  }

  public copy() {
    return new Mino(this.x, this.y, this.rot, this.shape)
  }

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

  get rot(): number {
    return this._rot
  }

  set rot(value: number) {
    this._rot = value
  }

  get shape(): number {
    return this._shape
  }

  set shape(value: number) {
    this._shape = value
  }
  private _x: number
  private _y: number
  private _rot: number
  private _shape: number
}

export { Mino }
