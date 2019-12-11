// // ASSESSMENT 2: JAVASCRIPT FOUNDATIONS
// // Coding practical questions

// // 1. Write a function that takes a number as an argument and decides if the number is evenly divisble by three or not. Use the test cases 15, 0, 385, -7. Expected output: "15 is divisible by three", "0 is divisible by three", "385 is not divisble by three", "-7 is not divisble by three".
// const div3 = (...number) => {     
//     if(number % 3 === 0){
//     return number + " is divisible by 3"
// } else {
//     return number + " is not divisible by 3"
//  }
// }

// console.log(div3(15))
// console.log(div3(0))
// console.log(div3(385))
// console.log(div3(-7))


// // 2. Create an object called helloMe. Include your firstName, lastName and TWO OTHER properties of you. Add a method to your object that will return a sentence using the object properties to describe you.
// var helloMe = {
//     firstName: "Michael", 
//     lastName: "Abdelshahid",
//     nationality: "Egyptian", 
//     languages: " Arabic, English and American Sign Language"
//     introMe: function () {
//         return `Hello, My name is ${this.firstName} ${this.lastName}. I am ${this.nationality} and speak three languages:${this.languages}`
//     }
// }
// console.log(helloMe.introMe())

// // ------------------------------------- Consider the variable:

// var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"];

// // 3a. Write a function that returns every other item from the array as one string. Expected output: "streetlamp teeth nephew database"
// const everyItem = (array) =>{
//     let item = array.filter((value, index) =>{
//         return index%2 === 0
//     })
//     return item.join(" ")
// }
// console.log(everyItem(randomNouns))

// // 3b. Create a function that takes in the variable and returns the array with all the words capitalized. Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]
// const cap = (array) =>{
//     return array.map(value =>{
//         return value[0].charAt(0).toUpperCase().concat(value.slice(1))
//     })
// }
// console.log(cap(randomNouns))



// // 3c. STRETCH: Create a function that returns the length of each string from the randomNouns variable. Expected output: [10, 6, 5, 10, 6, 11, 8]
// const stringLen = (array) =>{
//     return array.map(value =>{
//         return value.length
//     })
// }
// console.log(stringLen(randomNouns))



// // -------------------------------------- Consider the variables:
// var testString1 = "learn"
// var testString2 = "academy"
// var testString3 = "sandiego"

// // 4a. Write a function called alphabetSoup that takes one argument and returns a string with all the letters in alphabetical order. Use each of the varibales as test cases. Expected output: "aelnr" "aacdemy" "adeginos"
// const aBC = (string) => {
//     return string.split("").sort().join("")
// }
// console.log(aBC(testString1))
// console.log(aBC(testString2))
// console.log(aBC(testString3))

// // 4b. Write a function that takes in all three variables and returns a string with all the letters in alphabetical order. Expected output: "aaaacddeeegilmnnorsy"
// const aBCOrder = (...strings) => {
//     let aBCStrings = [...strings]
//     return aBCStrings.join("").split("").sort().join("")
// }
// console.log(aBCOrder(testString1, testString2, testString3))

// // ------------------------------------- Consider the variables:
// var amounts = [9, 1, 8, 16, 5, 1, 42]
// var animals = ["ducks", "elephants", "pangolins", "zebras", "giraffes", "penguins", "llamas"]

// // 5a. Write a function that takes the two variables and returns a combined string. Expected output: "9 ducks 1 elephants 8 pangolins 16 zebras 5 giraffes 1 penguins 42 llamas"
// const combinedStrings = (array1, array2) => {
//     let combined = array1.map((value, index) => {
//         return value + " " + array2[index]
//     })
//     return combined.join(" ")
// }
// console.log(combinedStrings(amounts, animals))

// // 5b. STRETCH: Create a function that combines the two variables and updates the animal to be singular if the animal's corresponding number is 1. Expected output: "9 ducks 1 elephant 8 pangolins 16 zebras 5 giraffes 1 penguin 42 llamas"
// const combinedStrings2 = (array1, array2) => {
//     let combined = array1.map((value, index) => {
//         if(value === 1){
//             return `1 ${array2[index].slice(0, array2[index].length-1)}`
//         } else {
//             return value + " " + array2[index]
//         }
//     })
//     return combined.join(" ")
// }
// console.log(combinedStrings2(amounts, animals))

var text = 'outside'
function logIt(){
  console.log(text)
  var text = 'inside'
}
logIt()