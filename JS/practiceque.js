// let num=100;
// if(num%10==0){
//     console.log("good");
// }else{
//     console.log("bad");
// }

// let name = prompt("enter your name:");
// let age = prompt("enter your age:");
// console.log(name,age);
// alert(`${name} is ${age} years old `);

// let quarter=1;
// switch(quarter){
//         case 1:
//         console.log("January,february,march");
//         break;
//         case 2:
//         console.log("April,may,june");
//         break;
//         case 3:
//         console.log("July,August,september");
//         break;
//         case 4:
//         console.log("october,november,december");
//         break;   
//         default:
//             console.log("Not a quarter") ;
// }

// let num1=32;
// let num2=47852;

// if((num1%10) == (num2%10)){
//     console.log("numbers have the same last digit which is",num1%10);

// }else{
//     console.log("numbers dont have the same last digit");
// }

const arrayAverage =(arr) => {
    let sum =0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum/arr.length;
};

// let arr=[1,2,3,4,5];
// console.log(arrayAverage(arr));

// let num =4;
// const isEven = (num) => {
//     if (num%2==0){
//         return true;
//     }
//     else {
//         return false;
//     }
// } ;
  
// console.log(isEven(num));
   
// const object={
//     message:'Hello,World!',logMessage(){
//         console.log(this.message);
//     }
// };
// setTimeout(object.logMessage,1000);

let length = 4;
function callback(){
    console.log(this.length);
}
const object ={
    length: 5,
    method(callback){
        callback();
    },
};
// object.method(callback,1,2);

// let nums =[1,2,3,4,7,8,2,9,10,12];
// let ans=nums.filter((el) => {
//     return el < 5;
// })
// console.log(ans);
// [2,4,6].every((el)=> el%2==0);

// let nums=[1,2,3,4];
// let finalVal = nums.reduce((res,el)=>{
// console.log(res);
// return res+el;
// });
// console.log(finalVal);

 let arr =[1,2,5,6,8,3,4,2];
// let max=-1;
// for(let i=0; i<arr.length;i++){
//     if(max<arr[i]){
//         max=arr[i];
//     }
   
// }
// console.log(max);

let max=arr.reduce((max, el)=>{
    if(max < el){
        return el;
    }else{
        return max;
    }
});
console.log(max);

// let nums=[10,20,30,40];
// let ans=nums.every((el)=> el%10==0);
// console.log(ans);

//function sum(...args) {
//     for(let i=0;i<args.length;i++){
//         console.log("the sum is:",args[i]);
//     }
// }
//return args.reduce((sum,el)=> sum+el);
//}

let names=["tony","bruce","peter","steve"];
// let winner=names[0];
// let runnerup=names[1];
let [winner,runnerup,secondRunnerup] = names;
console.log(names);

let nums=[2,4,6,8,1];
const sum=nums.map((num)=>num+5);
console.log(sum);

// let sum=nums.reduce((res,ele)=>res+ele,0);
// let avg=sum/nums.length;
// console.log(avg);

let strings=["adam","bob","john"];
console.log(strings.map((string) => string.toUpperCase()));

const  doubleAndReturnArgs = (arr, ...args)=>[
    ...arr,
   ...args.map((v)=>v*2)
];
console.log(doubleAndReturnArgs([1,2,3],4,4));

const mergeObjects=(obj1,obj2)=>({...obj1,...obj2});
console.log(mergeObjects({a:1,b:2},{c:3,d:4}));
