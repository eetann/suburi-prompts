const {black, red, bgGreen, bgYellow, underline} = require("kleur")

console.log(bgYellow(underline(black("bgYellow(underline(black))"))))
console.log(red(bgGreen("red(bgGreen)")))
