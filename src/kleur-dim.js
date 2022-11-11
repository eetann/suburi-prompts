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
  dim,
} = require("kleur")

console.log(red(`red ${dim("dim")}`))
console.log(green(`green ${dim("dim")}`))
console.log(yellow(`yellow ${dim("dim")}`))
console.log(blue(`blue ${dim("dim")}`))
console.log(magenta(`magenta ${dim("dim")}`))
console.log(bgWhite().black(`bgWhite black ${dim("dim")}`))
console.log(bgBlack().white(`bgBlack white ${dim("dim")}`))
console.log(bgBlack().gray(`bgBlack gray ${dim("dim")}`))
console.log(bgBlack().grey(`bgBlack grey ${dim("dim")}`))

console.log(bgBlack(`bgBlack ${dim("dim")}`))
console.log(bgRed(`bgRed ${dim("dim")}`))
console.log(bgGreen(`bgGreen ${dim("dim")}`))
console.log(bgYellow(`bgYellow ${dim("dim")}`))
console.log(bgBlue(`bgBlue ${dim("dim")}`))
console.log(bgMagenta(`bgMagenta ${dim("dim")}`))
console.log(bgWhite(`bgWhite ${dim("dim")}`))
