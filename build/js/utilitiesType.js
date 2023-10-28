"use strict";
//Utility Types
const updateAssignement = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
};
console.log(updateAssignement(assign1, { grade: 95 }));
const assignGraded = updateAssignement(assign1, { grade: 95 });
// Required and Readonly 
const recordAssignment = (assign) => {
    //send to db 
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
