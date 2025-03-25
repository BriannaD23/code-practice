let students = [
    {name: "Piyush", rollNumber:31, marks:80 },
    {name: "Jenny", rollNumber:15, marks:69 },
    {name: "Kashual", rollNumber:16, marks:35 },
    {name: "Dilpree", rollNumber:7, marks:55 },

]

// let result = [];

// for( let student of students){
//     if(student.marks > 60){
//       result.push(student)
//     }
// }

// console.log(result)


const studentFilter = students.filter((student) => student.marks > 60)

console.log(studentFilter)

const marksAndRollNumber = students.filter((student) => student.marks > 60 && student.rollNumber > 15 )

console.log(marksAndRollNumber)

//question 4 sum all marks


const sumAllMarks = students.reduce((acc, curr) => acc + curr.marks,0 )

console.log(sumAllMarks)

// return  only names of students wh scored more than 60

const names = students.filter((student)=> student.marks >60).map((student) => student.name)

console.log(names)

//Question 6

const addTwenty = students.map((student) => {
    if(student.marks < 60){
        student.marks += 20;
    }
    return student
})
.filter((student) => student.marks > 60 ).reduce((acc ,curr) => acc + curr.marks,0 ) 
console.log(addTwenty)