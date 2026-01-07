// write a code to reverse the string
// given string = "hello to javascript"
// output = javascript to hello

let str = "hello to javascript"
console.log(str)
console.log("string length:",str.length)
let reverse = str.split(" ").reverse().join(" ")
console.log(reverse)