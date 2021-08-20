
// count is of "type" number
let count = 5
count = 10
//count = "Justin"

// Const's type is a literal
const fname = "Marla"

// this makes a var of type any
// let testing;
let testing: number;

// testing = "Justin"
testing = 5


type Student = {
    fname: string
    lname: string
    grade: number
}

let student: Student = {
    fname: "Andy",
    lname: "Anderson",
    grade: 12,
}

let student2: Student = {
    fname: "Jane",
    lname: "Adam",
    grade: 12,
}

function toString(student: Student): string {
    return JSON.stringify(student)
}

const toStringArrow = (student: Student): string => {
    return JSON.stringify(student)
}

console.log(toString(student))
console.log(add(5, testing))

function add(x: number, y: number): number {
    let result = x + y
    return result
}
// Any & Void 


// Union
type Status = "success" | "failure"
type ServerResponse = Student | string
// Tuple
function sendMessage(): [status: Status, response: ServerResponse]
{
    let tmp = Math.round((Math.random()));

    if (tmp == 1) {
        return ["success", {
            fname: "Austin",
            lname: "Ahmann",
            grade: 12
        }]
    } else {
        return ["failure", "Something failed" ]
    }
}

for(let i=0; i<10; i++){
    let [statusResult , data] = sendMessage()
    if (statusResult == "success")
        console.log(data)
}