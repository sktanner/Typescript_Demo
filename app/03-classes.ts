//Properties
class Person {
    fName: string;
    lName: string;
}

let melody: Person = new Person ()

melody.fName = "Melody"
melody.lName = "Tanner"

let someVariableName: Person = new Person()



// Methods

class PersonTwo {
    fName: string;
    lName: string;

    sayHello(){
        console.log("Hello", this.fName);
    }
}

let sarah: PersonTwo = new PersonTwo ()

sarah.fName = "Sarah"
sarah.lName = "Tanner"
sarah.sayHello()


// Constructors

class Game {
    constructor(name: string, maker: string){
        this.gameName = name;
        this.gameMaker = maker;
    }
    gameName: string;
    gameMaker: string;
}

let battleship: Game = new Game('Battleship', 'Hasbro')

// let battleship: Game = new Game() <---Throws an error because two arguments are required in the parens


// Inheritance

class Vehicle {
    type: string
    make: string
    model: string
    manufactureYear: number
    runs: boolean
    topSpeed: number
}

class Automobile extends Vehicle {
    isSelfDriving: boolean
}

let myCar: Automobile = new Automobile()
myCar.isSelfDriving = false
myCar.topSpeed = 200
myCar.make = "Volvo"

class Motorcycle extends Vehicle {
    easyToDoWheelie: boolean
}

let myMotorcycle: Motorcycle = new Motorcycle()
myMotorcycle.easyToDoWheelie = true
myMotorcycle.topSpeed = 180


// Parameter Properties

// class Store {
//     constructor(name: string, city: string){
//         this.name = name
//         this.city = city
//     }
//     name: string
//     city: string
// }

class Store {
    constructor(public name: string, public city: string){}
}

let ikea: Store = new Store('Ikea', 'Fishers')


// Accessors

class Employee extends Person{
    private _salary: number

    getSalary(): string {
        return this._salary.toString()
    }

    setSalary(newSalary: number) {
        this._salary = newSalary
    }
}

let newEmployee: Employee = new Employee()
newEmployee.setSalary(30000)

let salaryResult: string = newEmployee.getSalary()
console.log("The salary is:", salaryResult)