// Truthy And Falsy this happen when we assume that the value exist as shown in the below if else
// without even specifing if its true or false the js will consider it true or not

const userEmail = []
const name = "irafan"

if (name){
    console.log("I've Got the Name");
}else{
    console.log("No I Don't");
}

// Falsy value
// false, 0 , -0, BigInt 0n ,"", null, undefined, NaN

// Truthy value
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0){
    console.log("Array is Empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}

// ***************May be useful*******************
// false == 0 ->true
// false == '' -> true
// 0 == '' -> true