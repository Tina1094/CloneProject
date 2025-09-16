let ipt=document.querySelector("#myInput");
let opt=document.querySelector("#output")
ipt.addEventListener("keydown",function(event){
    console.log("code=",event.code); //Arrowup(U),Arrowdown(D),Arrowleft(L),Arrowright(R)
    if(event.code == "KeyU"){
       console.log("character moves up");
    }else if (event.code == "KeyD"){
       console.log("character moves down");
    }
    else if(event.code == "KeyL"){
       console.log("character moves left");
    }
    else if(event.code == "KeyR"){
       console.log("character moves right");
    }
   
});
ipt.addEventListener("keypress",function(event){
   output.innerText=`You pressed: ${event.key}`;
 });


// let btn=document.querySelector("button");
// btn.addEventListener("mouseout",function(){
//     console.log("mouse moved out!");
// });

let btn =document.createElement("button");
btn.innerText="click me";
document.body.append(btn);

btn.addEventListener("click",function(){
    btn.style.backgroundColor="green";
})

let input=document.querySelector("#myInput");
let hd=document.querySelector("#display");

input.addEventListener("input",function(){
    let filtered=input.value.replace(/[^a-zA-Z ]/g, ""); 
    hd.innerText=filtered;
})
let list=document.querySelector("#mylist");
let status=document.querySelector("#status");
list.addEventListener("scroll", function(){
    status.innerText=`you scrolled: ${list.scrollTop}px`
})

