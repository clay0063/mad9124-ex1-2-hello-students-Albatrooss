'use strict'

// 1. Read the JSON file into a variable called students
const students = require('./students.json');

// 2. Iterate over the students array and print Hello with their full names to the console
// e.g. Hello Walter Baker
students.map(st=>{
    console.log(`Hello ${st.firstName} ${st.lastName}`)
})

// 3. Print out the number of last names starting with the letter D
// e.g. Count of last names starting with D is 1

function findLetterD(){
    const names = students.map(st=>{
        const letter = st.lastName.charAt(0);
        return letter;
    });
    let total = names.filter(name => name=="D");
    console.log(`The number of last names starting with the letter D is ${total.length}.`);
}
findLetterD();

