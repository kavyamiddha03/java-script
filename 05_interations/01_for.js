//for 

for (let i = 0; i <= 10; i++) {
    const element = i
    if(element == 5){
        // console.log("5 is the best number");
    }
    // console.log(element);
    
}

// console.log(element); this will not work because it is out of scope

for (let i = 1; i <=10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <=10; j++) {
        // console.log(`Inner loop value ${j} and inner loop value ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
    }
    
}

let myarr = ['flash' , 'batman' , 'superman']
// console.log(myarr.length);

for (let index = 0; index <=myarr.length; index++) {
    const element = myarr[index];
    // console.log(element);
}

// Break and Continue

for (let i = 0; i < 20; i++) {
    if (i == 5) {
        console.log('5 is detected')
        // break
        continue
    }
    console.log(i);
    
}