"use strict"
// 1. Read the JSON file into a variable called students
const students = require("./students.json")
const say = (message) => console.log(message)

say("Hello world!")

students.forEach(({ firstName, lastName }) => say(`Hello ${firstName} ${lastName}`))
students.forEach((student) => say(`Hello ${student.firstName} ${student.lastName}`))
// 2. Iterate over the students array and print Hello with their full names to the console
// e.g. Hello Walter Baker
const lastNameStartatD = students.filter(({ lastName }) => lastName.charAt(0) === "D")
say(`Count of last names starting with D is ${lastNameStartatD.length + 1}`)
// 3. Print out the number of last names starting with the letter D
// e.g. Count of last names starting with D is 1
