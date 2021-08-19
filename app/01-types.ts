// let username: string = "instructor"
// let password: string = "Letmein1234!"
// let instructorId: number = 5

// let password: string
let phoneNumber: number
let email: string
let socialSecurity: number
let isMarried: boolean

let greeting = "Hello"

let password: string
// password = 1234  <--- gives Error

let age: number = 40
let currentYear: number = 2018

let decimal: number = 6
let hex: number = 0xf00d
let binary: number = 0b1010

let companyName: string
companyName = "Eleven Fifty"

let appName: string = "Twitter"
appName = "Instagram"

let isLoggedIn: boolean = true
let isGoldLevelUser: boolean = true

let studentList: string[] = ['Tom', 'Tracy', 'Nikaya']
let allScores: Array<number> = [100,92, 95, 96]
console.log("Student List:", studentList[0]);

// Type Any

let dataFromThirdParty: any = '1234'
console.log(dataFromThirdParty)
console.log(typeof dataFromThirdParty)

dataFromThirdParty = 1234
console.log(dataFromThirdParty)
console.log(typeof dataFromThirdParty)

// Void

function sayHelloToAll() : void {
    console.log("Hello to all!")    
}

// Null & Undefined
let undefinedVariable: undefined = undefined
let nullVariable: null = null

// Tuple
let usernameAndId: [number, string]
usernameAndId = [1, "kennisreally40"]

// usernameAndId = ["kenn26", 2] <--- gives Error

// Enum
enum WeaponType { Sword, Saber, Spear }
let weapon: WeaponType = WeaponType.Sword

enum CardType { Ace = 1, Two, Three, Four }
let cardType: string = CardType[2]
console.log(cardType)

// Union Types
let x: number | string
let y: number | null

x = '1234'
x = 1234

// x = true  <--- give Errors
// y = false <
