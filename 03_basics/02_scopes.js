let a = 5
const b = 7
// var c = 300

// the reason we don't use var is bcuz the var will take the global variable
if (true){
    let a = 10
    const b = 20
    // var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c); he'll take the if's var c =30 even though we want the global or means it'll take whatever specify after the one we use before

function one(){
    const username = "faiz"

    function two(){
        const website = "Youtube"
        // console.log(username);
    }
     
    // console.log(website);

    two()
}

one()

if (true) {
    const username = "Gon"
    if (username ==="Gon") {
        const website = " Youtube"
        // console.log(username + website );

    }
    // console.log(website); scope is inside the second if

    
}

// console.log(username); scope is is only can be accesed in the if statement

// ***********************interesting*******************************

// addOne(6) can be used before as we don't hold them in any variable 

function addOne(num){
    return num + 1 

}

addOne(6)

// console.log(addTwo(8)) give an error cuz we hold it in a varaible and its says Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2

}

console.log(addTwo(8))