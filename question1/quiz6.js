//? 6. write a reduce method to get the sum of all array items
const arr = [31, 1, 7, 12, 27];

//! Answer:

const sum= arr.reduce((num1,num2)=> num1+num2)
console.log(sum)

// :اگه به صورت کلی خواستیم جمع آیتم های هر اری ای رو بدست بیاریم

// function sumArrayItems(array){
//    return array.reduce((item1,item2)=>item1 + item2)
// }
// console.log(sumArrayItems(arr))