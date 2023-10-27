"use strict";
// Index Signature
Object.defineProperty(exports, "__esModule", { value: true });
exports.student = void 0;
const todayTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
let prop = 'Pizza';
exports.student = {
    name: 'Ram',
    GPA: 3.8,
    classes: [100, 230]
};
// console.log(student.test)
for (const key in exports.student) {
    console.log(`${key} : ${exports.student[key]}`);
}
Object.keys(exports.student).map(key => {
    console.log(exports.student[key]);
});
const monthlyIncomes = {
    salary: 400,
    bonus: 200,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
