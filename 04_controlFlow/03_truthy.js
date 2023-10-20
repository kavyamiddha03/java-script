const usereamil = ""

// if(usereamil){
//     console.log("email entered");
// }else{
//     console.log("enter your email");
// }

// Falsy values
// 0 , -0 , "" , false , Bigint 0n , null , undefined , NaN;


// truthy values
// "0" , "false" , " " , [] , {} , function(){}

// if(usereamil.length === 0){
//     console.log("true")
// }else{
//     console.log("enter email")
// }

const emptyobj = {}

if(Object.keys(emptyobj).length === 0){
    console.log("object empty")
}else{
    console.log('object full')
}



// NULLish coalesing operator (??) : null and undefined
let val1 ;

// val1 = 10 ?? 15
// val1 = null ?? 15
// val1 = undefined ?? 15
// val1 = undefined ?? 60 ?? 10
// console.log(val1)
// Ternary operator 

// condition ? true : false


const icetea = 100
icetea <= 80 ? console.log("less than 80") : console.log("more than 80")






