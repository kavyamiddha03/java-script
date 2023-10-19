const user = {
    username: "hitesh",
    price: 699,
    welcomeMessage: function () {
        console.log(`${this.username}, Welcome to website `);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username = "hitesh";
//     console.log(this.username);
// }

// const chai = function (){
//     let username = "hitesh";
//     console.log(this.username);
// }

const chai = () => {
    let username = "hitesh";
    console.log(this);
}

chai();

// let addTwonum = (num1,num2) => {
//     return num1+num2;
// }

// Implicit return it is used when your code is of one line , when we use curly  bracket we have to use return keyword and if we use parenthesis we don't have to use return keyword

// let addTwonum = (num1,num2) => (num1+num2);

let addTwonum = (num1,num2) => ({user: "kavya"});


console.log(addTwonum(3,4))

const myarr = [1,2,3,4,5]

console.log(myarr.forEach(() => {})); 
// console.log(myarr.forEach(() => ())); 
