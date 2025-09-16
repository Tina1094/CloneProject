// console.log("hello world!");
// console.log("apna college");
let a=10;
let b=5;
console.log("sum is: ",a+b);
// this is a comment
let pencilPrice = 10;
let erasorPrice =5;
//console.log("the total price is:",pencilPrice + erasorPrice, "Rupees. ");
//let output = `The total price is : ${pencilPrice+erasorPrice} Rupees.` //back ticks
console.log(`The total price is : ${pencilPrice+erasorPrice} Rupees.`);
//Arithmetic operators
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
console.log(a++); //10
console.log(++a); //12
//conditional statements
console.log("before my if statement");
// let age = 23;
// if(age >= 18) {
//     console.log("you can vote");
//     console.log("you can drive");
// }
// if (age > 20) {
//     console.log("you are in your 20s");
// }
// console.log("after my if statement");

let firstName ="aman";
if (firstName == "shradha"){
    console.log(`Welcome $(firstName)`);
}
let color = "red";
if(color == "red"){
    console.log("stop! light color is red");
}
if(color == "yellow"){
    console.log("slow down light color is yellow");
}
if(color == "green"){
    console.log("go light color is green");
}
 let age = 23;
 if (age >= 18){
    console.log("you can vote");
 }
 else if (age < 18){
    console.log("you cannot vote");
 }

 let month ="january";
 if (month=== "january"){
    console.log("winter is here");
 }
 else if(month === "april") {
    console.log("summer is here");
 }

 let size ='S';
 if(size === 'XL'){
    console.log("price is 250");
 }
 else if(size === 'L'){
    console.log("price is 200");
 }
 else if(size === 'M'){
    console.log("price is 100");
 }
 else {
    console.log("price is 50");
 }
 let marks =45;
 if (marks >= 33){
    console.log("PASS");
    if (marks >= 80){
        console.log("Grade: O");
    }else {
        console.log("Grade : A");
    }
 }else {
    console.log("Better luck next time");
 }

 let str="apple";
 if((str[0]=== 'a')&&(str.length > 3)){
    console.log("String is good");
 }else{
    console.log("String is not good");
 }

 if(true){
    console.log("it has true value");
 }else{
    console.log("it has false value");
 }
 //alert ("something is wrong!");
//  console.log("this is simple log");
//  console.error("this is an error msg");
//   console.warning("this is an error msg");
let firstname= prompt("enter your firstname :" );

let lastname= prompt("enter your lastname :" );
console.log("welcome", firstname," ", lastname);
alert(msg);

