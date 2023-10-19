// IIFE Immediatly Invoked Function Expression 

(function chai(){
    // Named IIFE
    console.log("hello");
})();

// ; is needed

( (name) => {
    console.log("hy");
} )('kavya')