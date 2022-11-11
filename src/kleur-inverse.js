const {
  red,
  green,
  yellow,
  blue,
  magenta,
  black,
  white,
  gray,
  grey,
  bgBlack,
  bgRed,
  bgGreen,
  bgYellow,
  bgBlue,
  bgMagenta,
  bgWhite,
  inverse,
} = require("kleur")

console.log(red(`red ${inverse("inverse")} undo`))
console.log(green(`green ${inverse("inverse")} undo`))
console.log(yellow(`yellow ${inverse("inverse")} undo`))
console.log(blue(`blue ${inverse("inverse")} undo`))
console.log(magenta(`magenta ${inverse("inverse")} undo`))
console.log(bgWhite().black(`bgWhite black ${inverse("inverse")} undo`))
console.log(bgBlack().white(`bgBlack white ${inverse("inverse")} undo`))
console.log(bgBlack().gray(`bgBlack gray ${inverse("inverse")} undo`))
console.log(bgBlack().grey(`bgBlack grey ${inverse("inverse")} undo`))

console.log(bgBlack(`bgBlack ${inverse("inverse")} undo`))
console.log(bgRed(`bgRed ${inverse("inverse")} undo`))
console.log(bgGreen(`bgGreen ${inverse("inverse")} undo`))
console.log(bgYellow(`bgYellow ${inverse("inverse")} undo`))
console.log(bgBlue(`bgBlue ${inverse("inverse")} undo`))
console.log(bgMagenta(`bgMagenta ${inverse("inverse")} undo`))
console.log(bgWhite(`bgWhite ${inverse("inverse")} undo`))
