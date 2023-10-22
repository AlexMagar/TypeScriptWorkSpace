//function 

// Type Aliases

type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

interface GuitaristFn {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray,
}

type userId = stringOrNumber

// Literal types
// Literal types are very useful to keep code DRY(Don't Repeat Yourself)
let myNameFn: 'Dave'

let userNameFn: 'Dave' | 'John' | 'Amy'
userNameFn = 'Dave'

//function
const addFn = (a: number, b: number):number =>{
    return a+b
}

const logMsgFn = (message: any): void =>{
    console.log(message)
}

type mathFun = (a: number, b:number) => number

let multiplyFn: mathFun = function (c,d) {
    return (c*d)
}

//optional parameters 
const addAllFn = (a: number, b:number, c?:number): number =>{
    if( typeof c !== 'undefined'){
        return a+b+c
    }
    return a+b
}
//default parameters 
const sumAllFn = (a: number, b:number, c:number=6): number =>{
    return a+b+c
}

//rest parameter
const totalFn = (...nums: number[]):number => {
    return nums.reduce((prev, curr) => prev + curr)
}

//never type
const createErrFn = (errMsg: string) => {
    throw new Error(errMsg)
}

// use of the never type
const nnumOrStr = (value: number | string): string => {
    if(typeof value === 'string') return 'string'
    if(typeof value === 'number') return 'number'

    return createErrFn('This should never happen')
}