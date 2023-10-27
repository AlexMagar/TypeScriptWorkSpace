// Index Signature

interface TransactionObj{
    Pizza: number,
    Books: number,
    Job: number,
}

const todayTransactions: TransactionObj = {
    Pizza : -10,
    Books : -5,
    Job: 50
}

 let prop: string = 'Pizza'
 

 /// ============= 
 interface Student {
    // [key: string] : string | number | number[] | undefined
    name: string,
    GPA: number,
    classes?: number[]
 }

 export const student: Student = {
    name: 'Ram',
    GPA: 3.8,
    classes: [100, 230]
 }

// console.log(student.test)
for(const key in student){
    console.log(`${key} : ${student[key as keyof Student]}`)
}

Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student])
})

/// literal type

type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes = Record<Streams, number | string>

const monthlyIncomes: Incomes = {
    salary: 400,
    bonus: 200,
    sidehustle: 250
}

for (const revenue in monthlyIncomes){
    console.log(monthlyIncomes[revenue as keyof Incomes])
}

