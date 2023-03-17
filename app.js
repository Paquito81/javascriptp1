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
// function welcomePersonToFES() {
//     console.log("Welcome to FES, Hector")
// }
// 
//Call the function
// welcomePersonToFES();


//HOW TO MAKE YOUR CODE REUSABLE

// function welcomePersonToFES (name) {
//     console.log(`Welcome to FES, ${name}`)
// }

// //Call the function
// welcomePersonToFES('Hector');
// welcomePersonToFES('Mitri');
// welcomePersonToFES('Hector');

//Function definition
// function welcomePersonToFES(firstName, lastName) {
//     console.log(`Welcome to FES, ${firstName} ${lastName}`)
// }

// //Call the function
// welcomePersonToFES('Hector', 'Palacios')
// welcomePersonToFES('John', 'Doe')
// welcomePersonToFES('Hector', 'Palacios')

// function fn() {
//     return 5
//     console.log('my function')
// }

// console.log(5);

//                                                                                           



/**
 * Argument is when you are calling the function
 * Parameter is when you are defining the function
 */

/** 
* Create a function that converts Celcius to fahrenheit
*
* Celsius to Fahrenheit formula
*
* F = C x 1.8 + 32

@example
convertCelciusToFahrenheit(0) -> 32
convertCelciusToFahrenheit(10) -> 50
convertCelciusToFahrenheit(30) -> 86

*/

// function convertCelciusToFahrenheit(celsius) {
//     return celsius * 1.8 + 32
// }

// console.log(convertCelciusToFahrenheit(0));
// console.log(convertCelciusToFahrenheit(10));
// console.log(convertCelciusToFahrenheit(30));

// const convertCelciusToFahrenheit = (celsius) => {
//     return celsius * 1.8 + 32

// }

// console.log(convertCelciusToFahrenheit(0))
// console.log(convertCelciusToFahrenheit(10))
// console.log(convertCelciusToFahrenheit(30))

/** ARRAYS
 * What are arrays?
 * Data structure that can hold multiple data values in one variable
 * 
 */

//imageing that you are shopping for clothes
// let item1 = 20
// let item2 = 30
// let item3 = 40 
// let item4 = 50
// let item5 = 100

// let arr =[20, 30, 40, 50, 100]
// //First element of array
// console.log(arr[0])

// //Last element of array
// console.log(arr[4])

// let arr = [20, 30, 40, 50, 100]

//First element of array
// console.log(arr[0])
// //Last element of array
// console.log(arr[arr.length - 1])

// //How to add element unto an array you use the push method
// arr.push(200)

// let arr = [20, 30, 40, 50, 100]
//This the syntax of a callback function
// let newArray = arr.filter(element => {
//     console.log(element)
//     //if the element is less than 50
//     if (element < 50) {
//         return true
//     }
// })

// let newArr = arr.filter(element => {
//     return element < 50
// })

// let newArr = arr.filter(element => element < 50)

// console.log(newArr)

/**
 * Filter out all the 'FAIL" elements in an array
 * 
 * @example
 * ['A+', 'A', 'FAIL'] => ['A+', 'A']
 * ['FAIL', 'FAIL', 'B'] => ['B']
 * ['FAIL'] =>[]
 */

// let grades = ['A+', 'A', 'FAIL']

// let goodGrades = grades.filter((element) => {
//     console.log(element)
//     if (element !== 'FAIL') {
//         return true
//     }
// })

//console.log(goodGrades)

// let grades = ['A+', 'A', 'FAIL']

// let goodGrades = grades.filter(element => element !== 'FAIL')

// console.log(goodGrades)

// let grades = ['A+', 'A', 'FAIL']

// for (let i = 0; i < grades.length; ++i) {
//     console.log(grades[i]);
// }

/**
 * Filter out all the 'FAIL' elements in an array
 * without using the Array.filter method
 * 
 * @examples
 * ['A+', 'A', 'FAIL'] => ['A+', 'A']
 * ['FAIL','FAIL', 'B'] => ['B']
 * ['FAIL'] => []
 */

// let grades = ['A+', 'A', 'FAIL']

// //Create a new empty array called 'goodGrades'

// let goodGrades = []

// for (let i = 0; i < grades.length; ++i) {
//     if (grades[i] !== 'FAIL') {
//         goodGrades.push(grades[i])
//     }
//     //add the current element onto 'goodGrades'only if 
//     //the current element is not equal to 'FAIL'
// }

// // conaole log 'goodGrades'
// console.log(goodGrades);

// let arr = [1, 4, 9, 16]

// let newArray = arr.map ((element) => {
//     console.log(element)
//     return 1;
// })

// console.log(arr);

//Next line of code gives me the exact same answer
// let arr = [1, 4, 9, 16]

// let newArray = arr.map (element => '1');

// console.log(newArray)

/**
 * Turn each element in an array of dollars into cents
 * 
 * @examples
 * [1, 5, 10, 3] => [100, 500, 1000, 300]
 * [0, 10, 20,] => [0, 1000, 2000]
 */

// let dollars = [1, 5, 10,3];

// let cents = dollars.map ((element) => {
//     console.log(element)
//     return element * 100
// })

// console.log(cents)


// let dollars = [1, 5, 10,3];

// let cents = dollars.map (element => element * 100)

// console.log(cents)

//try wihtout using the map method


// let dollars = [1, 5, 10, 3]

//Create new 'cents' array
// let cents = [];

// //loop over every element in 'dollars'
// for (let i = 0; i < dollars.length; ++i) {

//     cents.push(dollars[i] * 100);
//     //multiply the element by 100
//     //add this element onto 'cents' array
// }

// //console log cents

// console.log(cents);


/**
 * OBJECTS
 * 
 * What are objects in javascript?
 * used to store multiple properties in one variable
 */

// let userFirstName = 'Hector'
// let userLastName = 'Palacios'
// let userDiscordId = 'paquito81'
// let userSubscriptionStatus ='VIP'

// let user = {
//     username: 'Hector',
//     email: 'paquito1981@outlook.com',
//     subscriptionStatus: 'VIP',
//     discordId: 'paquito81',
//     lessonsCompleted: [0,1]
// }

// console.log(user.username[0]);

// console.log(user.subscriptionStatus);

// console.log(user.lessonsCompleted.map((elem) => elem * 2));

// console.log(user.email);
// console.log(users[0].lessonsCompleted.map(elem => elem * 2))

// let users = [{
//     username: 'Hector',
//     email: 'paquito1981@outlook.com',
//     password:'test123',
//     subscriptionStatus: 'VIP',
//     discordId: 'paquito81',
//     lessonsCompleted: [0,1]
// }, 
// {
//     username: 'jose',
//     email: 'josesito1981@outlook.com',
//     password: 'jose123',
//     subscriptionStatus: 'VIP',
//     discordId: 'josesito81',
//     lessonsCompleted: [0, 1, 2, 3]
// },
// {
//     username: 'marco',
//     email: 'marco1981@outlook.com',
//     password: 'marco123',
//     subscriptionStatus: 'VIP',
//     discordId: 'marco81',
//     lessonsCompleted: [0, 1, 2, 3]
// },
// ];

// function login(email, password) {
//     for (let i = 0; i < users.length; ++i)
//     if (users[i].email === email) {
//         console.log(users[i]);
//         if (users[i].password === password) {
//             console.log('log the user in - the details are correct')
//         }
//         else {
//             console.log('password is incorrect - try again')
//         }
//         return;
//     }
// }

// login('esenosoyyo1981@outlook.com', 'jose123');



// /**
//  * Create a register function that accepts:
//  * -username
//  * -email
//  * -password
//  * -subscriptionStatus
//  * -discordId
//  * -lessonsCompleted
//  * 
//  * Inside your register function:
//  * 1. Create an object
//  * 2. Push this user object onto the 'users' array
//  */

// // function register(
// //     name,
// //     email,
// //     password,
// //     subscriptionStatus,
// //     discordId,
// //     lessonsCompleted
// // ) {
// function register(user) {
//     users.push(user);
// }
// //    {
// //     let user = {
// //         username: name,
// //         email: email,
// //         password: password,
// //         subscriptionStatus:subscriptionStatus,
// //         lessonsCompleted: lessonsCompleted
// //     }
// //     users.push(user);
// // }

// register({
//     username:'Hector',
//     email: 'paquito1981@outlook.com',
//     password: 'test123',
//     subscriptionStatus: 'VIP', 
//     discordId: 'paquito81', 
//     lessonsCompleted: [0, 1]
// });

// console.log(users)



/**
 * DOM - DOCUMENT OBJECT MODEL
 * 
 * What is DOM?
 * 
 * The DOM allows you to access and change the styling and content of elements on your website
 * 
 */

//First way of accessing an element
// console.log(document.querySelector('#title'));

//Second way of accessing an element

// console.log(document.getElementById('title'))

//Change the HTML
// document.querySelector('.title').innerHTML += 'Frontend Simplified'
// //Change the CSS
// document.querySelector(".title").style.fontSize = '10px'

// function changeTitleToRed() {
//      document.querySelector(".title").style.color = 'red'
    // console.log('clicked');
// }

function toggleDarkMode() {
    document.querySelector('body').classList.toggle("dark-theme")
}

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


