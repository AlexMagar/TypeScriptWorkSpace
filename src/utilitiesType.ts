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

const assignVerified: Readonly.<Assignment> = {
    ...assignGraded, verified: true
}