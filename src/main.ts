let myName: string = 'Dave'
let meaningOfLife: number;
let isLoading: boolean;
let album: string | number
let bugFix: any
let re: RegExp = /\w+/g

let stringArr = ['one', 'Hey', 'Dave']
let guitars = ['strat', 'Les Gram', 5302]
let mixedData = ['EVN', 1245, true]

let test = []
let bands: string[] = []

//Tuple
let  myTuple: [string, number, boolean] = ['Dave', 43, true]

let mixed = ['Hohn', 1, false]

//object
let myObj: object = {}

const exapleObj = {
    prop1: 'Ram',
    prop2: true
}

// exapleObj.prop1 = 32

type Guitarist = {
    name?: string, // '?'=> makes the name variable optional 
    active: boolean,
    albums: (string | number)[]
}

interface Guitarists {
    name: string,
    active: boolean,
    albums: (string | number)[]
}

let abc: Guitarist = {
    name: "Eddie",
    active: true,
    albums: [34]
}

//function
const greetGuitarist = (guitarist: Guitarist) =>{
    return `Hello ${guitarist.name}`
}

console.log(greetGuitarist(abc))

stringArr.push("teo")

meaningOfLife = 23
isLoading = true
album = "false" 

const sum = (a:number, b:string) =>{
    return a+b
}

console.log(sum(23, "45"))


//Enums
enum Grade {
    U=1,
    D,
    C,
    B,
    A
}

//Type Aliases
type stringOrNumer = string | number
type stringOrNumerArray = (string | number)[]

type Guitarist01 = {
    name?:string,
    active: boolean,
    albums: stringOrNumerArray
}

let xyz: Guitarist01 = {
    name: 'Ram',
    active: false,
    albums: [23, 'sdf']
}

type UserId = stringOrNumer

//Literal types
let myNameIs: 'Dave'

let userName: 'Dave' | 'John' | 'Anny'
userName = 'Dave'

//function
const sub = (a: number, b:number): number => {
    return a - b
}

const logMsg = (message: string): void =>{
    console.log(message)
}

//optional parameters
const addAll = (a:number, b: number, c?:number):number =>{
    if(typeof c !== 'undefined'){
        return a + b + c
    }
    return a + b
}

//Rest parameters
const total = (...nums: number[]):number =>{
    return nums.reduce((prev, curr) => prev + curr)
}