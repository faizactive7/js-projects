const coding = ["Js", "Ruby", "Java", "Python", "Cpp"]


// coding.forEach ( function (item){
//     console.log(item);
// })

// coding.forEach( (val) => {
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach( printMe )

// coding.forEach( (item, index, arr)=>{
//     console.log(item, index, arr);
// })

const code = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Ruby",
        languageFileName: "rb"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
]


code.forEach( (item) => {
    console.log(`The Language is ${item.languageName} and the filename is ${item.languageFileName}`);
})