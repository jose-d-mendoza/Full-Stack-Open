/******* Variables Section *******/
// IIFE
// declare var i int function to have it hoisted to function scope
// (function () {
//     for(i = 0; i < 10; i++)
//     {
//         console.log(i)
//     }
// })() // var is not declared in function so interpreter assumes is global
// console.log("after loop", i) // outputs: after loop 10
console.log()
console.log("******* Variables Section *******")

const x = 1
let y = 5

console.log(x, y)   // 1, 5 are printed
y += 10
console.log(x, y)   // 1, 15 are printed
y = "sometext"
console.log(x, y)   // 1, sometext are printed
//x = 4               // causes error because it is a const

/******* Arrays Section *******/
console.log()
console.log("******* Arrays Section *******")
const t = [1, -1, 3]
t.push(5)

console.log(t.length) // 4 is printed
console.log(t[1]) // -1 is printed

// output all array contents
t.forEach(value => { console.log(value) })

// concat
console.log()
console.log("--- concat ---")
const t2 = t.concat(10) // creates new array, push variable
console.log("t array =", t) // t array = [ 1, -1, 3, 5 ]
console.log("t2 array =", t2) // t2 array = [ 1, -1, 3, 5, 10 ]

// map
console.log()
console.log("--- map ---")
const m1 = t.map(value => value * 2)
console.log(m1) // [2, 4, 6]

const m2 = t.map(value => "<li>" + value + "</li>")
console.log(m2) // [ '<li>1</li>', '<li>-1</li>', '<li>3</li>', '<li>5</li>' ]

// destructuring
console.log()
console.log("--- destructuring ---")
const d = [1, 2, 3, 4, 5]
const [first, second, ...rest] = d
console.log(first, second) // 1, 2 is printed
console.log(rest) // [3, 4, 5]

/******* Objects Section *******/
console.log()
console.log("******* Objects Section *******")
