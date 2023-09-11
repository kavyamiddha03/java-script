// Stack (Primative), Heap(Non Primative)

let Myname = "Kavya middha"
anothername = Myname

anothername = "kavya"


console.log(Myname);
console.log(anothername);

let userone = {
    email: "kavyamiddha01@gmail.com",
    upi:  "user@ybl"
}

let usertwo = userone
usertwo.email = "kavyamiddha7340@gmail.com"

console.log(userone.email);