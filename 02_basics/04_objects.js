const tinderuser = new Object() 
//  const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "hitesh"
tinderuser.isLoggedin = false

// console.log(tinderuser);

const regularuser = {
    email: "h@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
const obj3 = Object.assign({}, obj1, obj2, obj4) //(target,source)

// const obj3 = {...obj1,...obj2}
// console.log(obj3);

const user = [
    
{    id: "1",
    email: "b@gmail.com"
},
    
{    id: "2",
    email: "b@gmail.com"
},
    
{    id: "3",
    email: "b@gmail.com"
}

]

// user[1].email
// console.log(user[0].id);

console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('isLoggedin'));

// start of this video singleton and object literals 