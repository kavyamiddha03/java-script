//singleton

//object litreals 

const mysym = Symbol("key1")

const jsUser = {
    name: "hitesh",
    age: 18,
    [mysym]: "Mykey",
    "full name": "kavya middha",
    location: "jaipur",
    isLoggedIn: false,
    email: "hitesh@gmail.com",
    LoginDays: ["Monday"," Staurday"]
}

// console.log(jsUser["email"]); // write in " " because the key behind the scene in used as string 
// console.log(jsUser.email);
// console.log(jsUser["full name"]);

// console.log(typeof jsUser[mysym]);

// jsUser.email = "hitehs@chatgpt.com"
// Object.freeze(jsUser)
// jsUser.email = "hitehs@microsoft.com"
// console.log(jsUser);


jsUser.greetings = function(){
    console.log(`Hello js user, ${this.name}`);
}

console.log(jsUser.greetings());