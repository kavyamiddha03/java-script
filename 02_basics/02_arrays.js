const marvel_heros = ["ironman", "hulk","thor"];
const dc_heros = ["superman", "flash", "batman"];
// console.log(dc_heros);

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1])

// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

const myArr = [ ...marvel_heros, ...dc_heros] // spread operator
console.log(myArr);

const anotherarray = [1 ,2 ,3,[ 4 , 5 , 6 ] ,6 ,7,[ 3 , 6 , 7,[1,2,3] ]]
const oneanotherarr = anotherarray.flat(2)
console.log(oneanotherarr);
console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));
console.log(Array.from({name: "hitesh"}));// we have to declare that we have make a arrays with keys or values ==== gives empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));





