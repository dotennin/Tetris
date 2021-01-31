import module = require('p5')

export = module
declare global {
  interface Window {
    p5: typeof module
  }
}
