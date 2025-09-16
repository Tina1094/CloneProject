h1 = document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          let num=Math.floor(Math.random()*5)+1;
          if(num>3){
            reject("promise rejected");
          }
            h1.style.color=color;
        console.log(`color changed to ${color}!`);
        resolve("color changed!");
    },delay);
});
}

async function demo(){
    try{ 
    await changeColor("red",1000);
     await changeColor("orange",1000);
      await changeColor("green ",1000);
       changeColor("blue",1000);
}catch (err){
    console.log("error caught");
    console.log(err);
}
let a =5;
console.log(5);
console.log("new number",a+3);
}
// changeColor("red",1000)
//     .then(()=>{
//         console.log("red color was completed");
//         return changeColor("orange",1000);
//     })
//     .then(()=>{
//         console.log("orange  color was completed");
//         return changeColor("green",1000);
//     })
//     .then(()=>{
//         console.log("green  color was completed");
//         return changeColor("blue",1000);
//     })
//     .then(()=>{
//         console.log("blue color was completed");

// });
// // callbacks nesting->callback hell

// function savetoDb(data){
//     return new Promise((resolve,reject)=>{
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//        resolve("success: data was saved");
//     }else{
//         reject("failure: weak connection");
//     }
// });
// }
 
// savetoDb("apna college") //req = promise object
// .then((result)=>{
//     console.log("data1 saved.");
//     console.log(result);
//      return savetoDb("helloworld")
// })
//     .then((result)=>{
//         console.log("data2 saved");
//         console.log(result);
//         return savetoDb("shradha");
//     })
//     .then((result)=>{
//         console.log("data3 saved");
//         console.log(result);
//     })
// .catch((error)=>{
//     console.log("promise was rejected");
//     console.log(error);
// });

// async function greet(){
//    throw"some random error";
//    return "hello!";
// }

// greet()
// .then((result)=>{
//     console.log("promise was resolved");
//     console.log("result was:",result);
// })
// .catch((err) => {
//     console.log("promise was rejected with err:",err);
// });

// let demo=()=>{
//     return 5;
// }