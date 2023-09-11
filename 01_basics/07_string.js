const name = "hitesh"
const repoCount = 50
console.log(name + repoCount + " value");

console.log(`My name is ${name} and my repocount is ${repoCount}`);

const gameName = new String("hitesh")
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf("s"));

const newString = gameName.substring(0, 4);
console.log(newString);
const anotherString = gameName.slice(-2, 6); // can take negative value also
console.log(anotherString);

const newstringone = "   hitesh   "
console.log(newstringone);
console.log(newstringone.trim()); // trim start() and trim end()

const url = "hitesh123@gmail.com"
console.log(url.replace('123','456'));

console.log(url.includes('sundar'));

const splitstring = "hitesh-sc-sd"
console.log(splitstring.split('-'));

console.log(gameName.at(-3));

console.log(gameName.concat(', ',url));