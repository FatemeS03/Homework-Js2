//? 7. Write a function to:
// todo1: find every item with more than 6 characters
// todo2: then check, if all of them have less than 10 characters return true, otherwise return false

const array = ['hello Jo', 'fish', 'birmingham', 'periodic table', 'phone'];
//!  Answer:


function testMore6Less10 (arr){
    const more6 = arr.filter(item => item.length > 6)
    return more6.every(i => i.length< 10)
    }
    console.log(testMore6Less10(array))


// or 

// const itemsMoreThan6Char = function (arr){
//     return arr.filter(item=> item.length > 6)
    
// }
// console.log(itemsMoreThan6Char(array))

// const islessThan10 = function(arr1){
//    return arr1.every((i)=> { return i.length < 10})
// }
// console.log(islessThan10(itemsMoreThan6Char(array)))
 


