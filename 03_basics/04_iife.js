// Immediately Invoked Function Expressions (IIFE)

(function connect(){
    // Named IIFE
    console.log(`DB CONNECTED`);
}());

// ()() as we seen before that when we want to call or execute a function we use one parantheses in function and other when we execute it 
// so how about we use both when we declaring the function itself that's where (IIFE) come in the picture.
// interview : bcuz there is a pollution due to global scope  which is someone define variable before which cause pollution that's why we use iife fro
// also use ; in this case as the interpreter not know when to end it 

( () => {
    console.log(`DB CONNECTION 2`);
}) ();

( (pname) => {
    console.log(`${pname} DB CONNECTION `);
}) ('java')