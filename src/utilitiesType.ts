//Utility Types

// Partial
interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

const updateAssignement = (assign: Assignment, propsToUpdate: Partial<Assignment>) => {
    return {
        ...assign, ...propsToUpdate
    }
}

const assign1: Assignment = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
}

console.log(updateAssignement(assign1, {grade: 95}))
const assignGraded: Assignment = updateAssignement(assign1, {grade: 95})

// Required and Readonly 
const recordAssignment = (assign: Required<Assignment>): Assignment => {
    //send to db 
    return assign
}

const assignVerified: Readonly<Assignment> = {
    ...assignGraded, verified: true
}

recordAssignment({...assignGraded, verified: true})

//Record
// <string, string> =>1st string is key and follow by value
const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
}

type Students = "Lax" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrades> ={
    Lax : "A",
    Kelly: "B"
}

// pick and omit
type AssignResult = Pick <Assignment, "studentId" | "grade">

const score: AssignResult = {
    studentId: "K123",
    grade: 45
}

type AssignPreview = Omit<AssignResult, "grade" | "verified" >

const preview: AssignPreview = {
    studentId: "2345ED", 
    title: "Final Grade",
}

// Exclude and Extract
type adjuctGrade = Exclude<LetterGrades, "u">

type highGrade = Extract<LetterGrades, "A"  | "B">


// Return type

type newAssign = { title: string, points: number}


 