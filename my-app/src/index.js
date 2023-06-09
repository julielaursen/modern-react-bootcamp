import foods from './foods'
import { choice, remove } from './helpers'

//Randomly draw a fruit from teh array
let fruit = choice(foods)

console.log(`I'd like one ${fruit}, please`)
console.log(`Here you go: ${fruit}`)
console.log(`May I have another?`)

let remaining = remove(foods, fruit)
console.log(
  `I'm sorry, we're all out. We have ${remaining.length} other fruits left`,
)
