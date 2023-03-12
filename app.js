// DATA TYPES AND VARIABLES

// STRINGS

// console.log('Hector'[5])
// console.log('12345'.length)
// let str = 'Hector'
// console.log(str.length - 1)


//BOOLEAN TYPE
// TRUE OR FALSE

//NULL & UNDEFINED

//Null = nothing
//Undefined = never existed

//VARIABLES

//what are variables use for? to store data
//let
//const

// let fullName = "hector Palacios"
// const raining = true
// let temperature = 30
// let planet = 'Earth'

// temperature = temperature + 2
// console.log(temperature)

//FIRST EXERCISE

/** 
* Converting Temperatures
*
* Celsius to Fahrenheit formula
*
* F = C x 1.8 + 32
*/

// let celsius = 10;
// let fahrenheit = 10 * 1.8 + 32;
// console.log(fahrenheit);

//EQUALITY
//"==" and "==="

// let bool = '1' == 1
// console.log(bool)




//CONDITIONAL

// let subscribed = true

// if (subscribed === true) {
//     console.log('show the video')
// }
// else if (loggedIn === true) {
//     console.log('tell the user to upgrade')

// }
// else {
//     console.log('tell user to log into account')
// }

// let cash = 10
// let price = 50
// let difference = cash - price;

// if (cash > price) {
// console.log(`you paid extra - here's ${difference} dollars change`)
// }
// else if (cash === price) {
//     console.log("you paid the exact amount, have a nice day!")
// }
// else {
//     console.log(`not enough money you  - you still owe ${difference * -1} dollars`)
// }

/**
 * COMPARING OPERATORS
 * > greater than
 * < less than
 * >= greater than or equal to
 * <= less then or equal to
 * 
 * LOGICAL OPERATORS
 * && checks if the left and right side of the comparison is true
 * 
 * true && true ---->true
 * true && false ----> false
 * false && true ----> false
 * false && false ----> false
 */

// let cash = 50
// let price = 40
// let isStoreOpen = true

// if (cash >= price && isStoreOpen === true) {
//     console.log('print the reciept')
// }

// let val = 'Hector'

// if (val) {
//     console.log(!!val)
// }
// else {
//     console.log("!!val")
// }

/**TERNARY OPERATORS
 * a shortcut for an if else condition
 * isObese ? 'unhealthy' : 'healthy'
 */

// let subscribed = true
// let loggedIn = true
// let str = subscribed && loggedIn ? 'show the video' : 'hide the video'
// console.log(str);


// let cash = 50 
// let price = 40
// let isStoreOpen = false;

// let str = cash >= price && isStoreOpen ? "give receipt" : "do not give receipt"
// console.log(str)

/** LOOPS
 * */

// let count = 1;
// console.log(count);
// count = count + 1
// console.log(count)

// let count = 1;

// while (count <= 100) {

//     console.log('this ran')
//     count = count + 1;
// }

// for (let i = 1; i <=100; ++i) {
//     console.log(i);
// }


/**Write a for-loop thst loops through 1 to 20
 * If the number is divisible by 3, print "Frontend"
 * If the number is divisible by 5, print "Simplified"
 * If the number is divisible by 3 and 5, print "Frontend Simplified"
 * If the number is *not* divisible by either 3 or 5, print the number
 * 
 * @example
 * 1 --> 1 
 * 2 --> 2 
 * 3 --> "Frontend
 * 4 --> 4
 * 5 --> "Simplified"
 * ...
 * 15 -> "Frontend Simplified"
 * ...
 * 20 -> "Simplified"
 */
// Practice Alot
//  for (let i = 0; i <= 20; ++i) {
//      if (i % 3 === 0 && i % 5 === 0) {
//          console.log(`${i} -> Frontend Simplified`)
//      }
//      else if (i % 3 === 0) {
//          console.log(`${i} -> Frontend`)
//      }
//      else if (i % 5 ===0) {
//          console.log(`${i} -> Simplified`)
//      }
//      else {
//          console.log(`${i} -> ${i}`)
//      }
     
//     }
   
    
/**
 * Print out every character from the string:
 * Frontend Simplified
 * 
 * @example
 * 
 * 'F'
 * 'r'
 * 'o'
 * ...
 * 'e'
 * 'd'
 */

// const str = "frontend Simplified"

// for (let i = 0; i < str.length + 1; ++i) {
//     console.log(str[i])
// }

/**
 * FUNCTIONS
 * 
 * What is a function in JavaScript?
 * 
 * it is a block of code designed to perform a particular task
 * 
 */

//DRY- Don't repeat yourself

// console.log("welcome to FES, Hector ")
// console.log("welcome to FES, Marco ")
// console.log("welcome to FES, Mario ")

//Function Definition
function welcomePersonToFES() {
    console.log("Welcome to FES, Hector")
}
//Call the function
welcomePersonToFES();

// console.log('Hello World');
// function hoursIntoSeconds(hour) {
//     return seconds = hour * 60 * 60; 
// }
// console.log(hoursIntoSeconds(2));

// function calcPerimeter (length, width) {
//     return 2 * (length + width);
// }

// console.log(calcPerimeter(10, 20));

// function calcAreaOfTriangle(base, height) {
//     //Calculate half * base * height
//     return (0.5) * base * height;
// }

// console.log(calcAreaOfTriangle(20, 20));

// function appendFrontend(string) {
//     return string + 'Frontend'
// }

// console.log(appendFrontend('Apple'));

// function appendFrontend(number) {
//     return 4 + (+number)
// }

// console.log(appendFrontend(1));

//this code is to long to solve 

// function sumGreaterThan100(num1, num2) {
    //1. first method
    // if (num1 + num2 > 100) {
    //     return true;
    // }
    // else {
    //     return false;
    // }
    //2. second method
    // if (num1 + num2 > 100) {
    //     return true;
    // }
    // return false;

    //3. third method
//     return num1 + num2 >= 100
// }

// console.log(sumGreaterThan100(50, 52));

// function lessThanOrEqualToZero(num) {
//     return num <= 0;
// }

// console.log(lessThanOrEqualToZero(-5));

// function oppositeBoolean(bool) {
//     return !bool;

// }
// console.log(oppositeBoolean(true));


