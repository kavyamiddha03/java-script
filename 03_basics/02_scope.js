// var c = 100
let a = 200
 
if(true){
    let a = 20
    const b = 30
    // var c = 40  
    // console.log("inner: ", a);
}


// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "hitesh.com"
        // console.log(username);
    }
    // console.log(website);
    two()

}

one()

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        // console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);

// +++++++++++++++++++++++++++++++++++ intresting ++++++++++++++++++++++++++++++++++++++++

console.log(addone(5))
function addone (num){
    return num + 1
}

// addtwo(5)
const addtwo = function(num){
    return num + 2
}


