// function sayMyname(){

// console.log("h")
// console.log("i")
// console.log("t")
// console.log("e")
// console.log("s")
// console.log("h")
// }
// sayMyname // refrence
// sayMyname() // execution 

// function addtwoNumbers(number1, number2){
//     console.log(number1+number2);
// }

// function addtwoNumbers(number1, number2){
//     let result = number1+number2;
//     return result
//      console.log("hitesh"); no statement work after return 
// }

function addtwoNumbers(number1, number2){
   
    return number1+number2
    // console.log("hitesh"); no statement work after return 
}

const result = addtwoNumbers(3,4) // undefined  because there is no retrun value to store the variable
// console.log("result: ",result);


// function loginUsername(username){
//     if(username === undefined){
//         console.log("please enter your name");
//     }
//     return `${username} is logged in`
// }

function loginUsername(username = "kavya"){
    if(!username){ // ! work as not, change true in false and vice versa
        console.log("please enter your name");
    }
    return `${username} is logged in`
}
// console.log(loginUsername("hitesh"));
// console.log(loginUsername());

function calulateCartprice(val1, val2,...num1){
    return num1
}

// console.log(calulateCartprice(200,400,500,2000));

const user ={
    username: "hitesh",
    price: 699
}

function handleObject(anyobject){
    console.log( `user name is ${anyobject.username} and the price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
    username: "hitesh",
    price: 799
})

const Mynewarray = [100,200,300,400]

function returnsecondValue (getArray){
    return getArray[1]
}

// console.log(returnsecondValue(Mynewarray));
console.log(returnsecondValue([100,200,300,400]));
