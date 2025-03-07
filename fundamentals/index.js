// console.log("Statement ends with a semicolon") // This is a statement
// console.log("Semicolon ommited before statement")

// alert("Hello")
// [1, 2].forEach(alert);
/*
    Javascript treats this as one line , it does not insert the semicolon before [] 
    so the above code is treated as one line 
*/
/*------------------------------------------------------------------------------------- */

/*------------------------------------------------------------------------------------- */
// A variable is a names storage for data 
let name;
// console.log(name); // Nothing is assigned to the variable so it is undefined

let a = 10;
// console.log(a) 

function main(){
    let a = 15;
    console.log(a); // first print 15 
    a = 20;
    console.log(a); // then print 20 
}

// main() 

// console.log(a) // This prints 10 
/*------------------------------------------------------------------------------------- */

/*---------------------------------Variables------------------------------------------- */

// Variable name cannot start with a digit 

// Use VARIABLE name like this for constant values which do not change when the program is running 

// Transpilers are used to convert the new features which are added in js 
// to old features in js fow some outdated browsers (?? operator)

// Polyfills(add missing function like math.Trunc) are used to add new functions which are present but for outdated browsers 
// they are not present 

/*------------------------------------------------------------------------------------- */

/*-------------------------------Data Types-------------------------------------------- */
// Dynamically Types language are those where the variables are assigned types based on 
// the data they are assigned 

// 8 Data Types in JS

// [1] <-- Number --> 
// The number type represents both integer and floating point numbers.
let n = 12;
n = 12.543

// Three special numberic values in number are Infinity, -Infinity and NaN
// console.log(2/0) // Infinity
// console.log(-2/0) // negative Infinity 
// console.log("sting divided with integer" / 3); // Computational error gives NaN

// console.log(NaN ** 0) // 1
// console.log(NaN ** 1) // NaN 

// [2] <-- BigInt --> 
// Integers can fit between this values {-(2^53 - 1) , 2^53 - 1 } 
// not all digits fit into the fixed 64-bit storage

// console.log(9007199254740991 + 1); // 9007199254740992
// console.log(9007199254740991 + 2); // 9007199254740992 

// A BigInt value is created by appending n to the end of an integer

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;


// [3] <-- String --> 
let str1 = 'Single Quote String'
let str2 =  "Double Quote String" 
let str3 =  `Here we can embed values like variables (${bigInt})  and expressions (${1 + 2})`
// console.log(str1)
// console.log(str2)
// console.log(str3)

// [4] <-- Boolean --> 
// The values are either true or false
let trueValue = true;
let falseValue = false;

// [5] <-- null -->
//The special null value does not belong to any of the types described above.
// It forms a separate type of its own which contains only the null value:

let age = null;

// In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.
// It’s just a special value which represents “nothing”, “empty” or “value unknown”.
// The code above states that age is unknown.


// [6] <-- undefined -->
// The special value undefined also stands apart. It makes a type of its own, just like null.

// The meaning of undefined is “value is not assigned”.

// If a variable is declared, but not assigned, then its value is undefined:

// let age;

// alert(age); // shows "undefined"
// Technically, it is possible to explicitly assign undefined to a variable:

// let age = 100;
// // change the value to undefined
// age = undefined;

// console.log(age); // "undefined"

// [7,8] <-- Objects and Symbols -->
// The object type is special.

// All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities.

// The symbol type is used to create unique identifiers for objects.
/*------------------------------------------------------------------------------------- */