// let msg = "  hello  ";
// console.log(msg);
// msg.trim();


// let name="ApnaCollege";
// console.log(name.toUpperCase());
// let xyz="I love coding";

// let newMsg= msg.trim().toUpperCase();
// console.log(newMsg);

// console.log(msg.slice(0,4));

let arr =["hello",'a',23,64,99,-6];
let item=64;
if(arr.indexOf(item)!=-1){
console.log("element exists in array");
}
else{
    console.log("element doesn't exist in array");
}

let str="   hello world      ";
console.log(`original string = ${str}`);
console.log(`string without spaces = ${str.trim()}`);


for(let i=1;i<=5;i++){
    console.log(i);
}

const favMovie="avatar";
let guess =prompt("guess my favorite movie");
while(guess != favMovie && (guess!="quit")){
    console.log("wrong guess");

}
if(guess == favMovie){
    console.log("congrats");
}