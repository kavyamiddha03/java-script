const myarr = [0,1,2,3,4,5]
// console.log(myarr);
// console.log(typeof myarr); object 

const arr = new Array(1,2,3,4,"hitesh",true)
// console.log(arr);
// console.log(typeof arr); object 

// myarr.push(6)
// myarr.push(7)
// myarr.pop()
// myarr.unshift(0)
// myarr.shift()
// console.log(myarr);

// console.log(myarr.includes(2));
// console.log(myarr.indexOf(3));

const arrnew = myarr.join()
console.log(arrnew);
console.log(typeof arrnew);

// slice and spilce 

console.log("A ",myarr);

const myn1 = myarr.slice(1,3)
console.log(myn1);

console.log("B ",myarr);

const myn2 = myarr.splice(1,3)
console.log(myn2);
console.log("C ",myarr);

// slice returns a piece of the array but it doesn't affect the original array. splice changes the original array by removing, replacing, or adding values and returns the affected values.
