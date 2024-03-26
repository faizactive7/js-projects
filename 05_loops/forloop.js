// for

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("we are currently at 5");
//     }
//     console.log(element)
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner Loop : ${j}`);
        
//     }
    
// }


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner Loop : ${j}`);
        // console.log(i + '*' + j + '=' + i*j);
        
    }
    
}

let myArray = ["flash", "Batman", "superman"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

// break and continue

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        // console.log(`Detected 5`);
        break
    }
    // console.log(i);
    
}

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(i);
    
}

// break will detect 5 as we comply in if condition and stop after detecting 5
// whereas when use continue it will check condition print accordindly and then skip the given condition which is to print 5 but it print detected 5 instead and skip the i = 5 and continue to other ...