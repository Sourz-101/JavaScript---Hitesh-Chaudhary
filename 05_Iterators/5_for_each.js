// Vidoe 29

// for each

// in foreach loop we treat it as a prototype of array. It needs one callback function(callback function do not have any name)

// for each loop do not return any value

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){
    // console.log(val);
} )

coding.forEach( (item) => {
    // console.log(item);
} )

function printMe(item){
    // console.log(item);
}

coding.forEach(printMe); // we don't have execute the function here, just call it


// *******
// This is the structure of a forEach function. Its perimeter are : (value, index, entire_Array)
coding.forEach( (item, index, arr)=> {
    // console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    // console.log(item.languageName);
} )