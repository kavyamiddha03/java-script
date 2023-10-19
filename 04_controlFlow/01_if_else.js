// if

// const userlogin = true;
// let temp = 41;

// if(temp === 41) {
//     console.log("temprature is equal to 41");
// } else{
//     console.log("temprature is not equals to 41");
// }

// console.log("temprature is less than 50");
// > , < , <= , >= , == , != , === , !==

// let score = 200;
// if(score){
//     var power = "fly";
//     console.log(`user power : ${power}`);
// }

// console.log(`user power : ${power}`);


let balance = 1000;

// if(balance == 500) console.log("test"),   
// console.log("test2");

if (balance < 500) {
    console.log("balance is less than 500");
}else if (balance < 750) {
    console.log("balance is less than 750");
}else if (balance < 900) {
    console.log("balance is less than 900");
}else{
    console.log("balance is 1000");
}


const userloggedin = true;
const debitcard = false;

// if (userloggedin && debitcard  && 2 == 2) {
//     console.log(" purchased ");
// }

if (userloggedin ||  debitcard ) {
    console.log(" hello user");
}
