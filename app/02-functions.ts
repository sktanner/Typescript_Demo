
function demoFunction(someNum){
    return someNum
}

demoFunction(1)
demoFunction("stuff")
// demoFunction(1, "Stuff")

function addNumbers(numOne: number, numTwo:number){
    return numOne + numTwo
}

// Works
addNumbers(1, 2)

// Errors
// addNumbers(1, 2, 3)
// addNumbers(1, 2, 3, "Foo")

// function hello(greetingString){
//     return greetingString
// }
// foo(1)

function sayHello(name: string) : string {
    return name
}
sayHello("Sarah")
// sayHello(1) <--- Error


// Optionals
function addNumbersWithOptional(numOne: number, numTwo: number, someString?: string){
    console.log(someString)
    return numOne + numTwo
}

addNumbersWithOptional(1, 2)
addNumbersWithOptional(1, 2, "This is optional")