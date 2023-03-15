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

// object literals
console.log()
console.log("--- object literals ---")
const object1 = {
    name: "Arto Hellas",
    age: 35,
    education: "PhD",
}

const object2 = {
    name: "Full Stack web application development",
    level: "intermediate studies",
    size: 5,
}

const object3 = {
    name: {
        first: "Dan",
        last: "Abramov",
    },
    grades: [2, 3, 5, 3],
    department: "Stanford University",
}

console.log(object1.name) // Arto Hellas
const fieldName = "age"
console.log(object1[fieldName]) // 35

object1.address = "Helsinki"
object1["secret number"] = 12341

/******* Functions Section *******/
console.log()
console.log("******* Functions Section *******")

// arrow functions
console.log()
console.log("--- arrow functions ---")
const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}

const result = sum(1, 5)
console.log(result) // 6

const square = p => p * p

const arr = [1, 2, 3]
const arrSquared = t.map(p => p * p) // [1, 4, 9]

// function declaration
console.log()
console.log("--- function  declaration ---")
function product(a, b) {
    return a * b
}

const prod = product(2, 6) // prod = 12
console.log(prod)

// function expression
console.log()
console.log("--- function  expression ---")

const average = function(a, b) {
    return (a + b) / 2
}

const ave = average(2, 5) // ave = 3.5
console.log(ave)

/******* Object Methods and "this" Section *******/
console.log()
console.log("******* Object Methods and 'this' Section *******")

// creating function for object
const arto = {
    name: "Arto Hellas",
    age: 35,
    education: "PhD",
    greet: function() {
        console.log("Hello, my name is " + this.name)
    },
    doAddition: function(a, b) {
        console.log(a + b)
    },
}

arto.greet() // Hello, my name is Arto Hellas

// assigning function to object
arto.growOlder = function() {
    this.age += 1
}

console.log(arto.age) // 35
arto.growOlder()
console.log(arto.age) // 36

// calling method through variable
arto.doAddition(1, 4) // 5

const referenceToAddition = arto.doAddition
referenceToAddition(10, 15) // 25

const referenceToGreet = arto.greet
referenceToGreet() // Hello my name is undefined

setTimeout(arto.greet.bind(arto), 1000) // Hello my name is Arto Hellas

/******* Classes Section *******/
console.log()
console.log("******* Classes Section *******")

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log("Hello, my name is " + this.name)
    }
}

const adam = new Person("Adam Ondra", 29)
adam.greet() // Hello, my name is Adam Ondra

const janja = new Person("Janja Garnbret", 23)
janja.greet() // Hello, my name is Janja Garnbret


