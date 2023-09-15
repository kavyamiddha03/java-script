//dates

const myDAte = new Date();
// console.log(myDAte.toString());
// console.log(myDAte.toLocaleDateString());
// console.log(myDAte.toLocaleString());
// console.log(myDAte.toDateString());
// console.log(myDAte.toJSON());

// console.log(typeof myDAte);

// let CreatedDate = new Date(2023, 1 , 4)
// let CreatedDate = new Date(2023, 1 , 4, 5 , 30,)
let CreatedDate = new Date("2023-01-05")
// console.log(CreatedDate.toLocaleString());

let Mytimestamp = Date.now();

// console.log(Mytimestamp);
// console.log(CreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.getHours());
console.log(newDate.toLocaleString());
console.log(newDate.toDateString());

// `${newDate.getdate()} and the time is`

newDate.toLocaleString('default',{
    weekday: "Long",
})
