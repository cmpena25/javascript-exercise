"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.loggingthe function's return value
 */

function analyzeColor(x) {
    if (x === "blue") {
        alert("That is my favorite!");
    } else if (x === "red") {
        alert("Red is ok...");
    } else if (x === "green") {
        alert("like the Earth!");
    } else if (x === "violet") {
        alert("just like Liz's eyes");
    } else if (x === "orange") {
        alert("like the fruit!");
    } else if (x === "yellow") {
        alert("like the sun!");
    } else if (x === "indigo") {
        alert("I like indigo");
    } else if (isNaN(x) === false) {
        alert("that is not a color!");
    } else {
        alert(x+ ", that is not my favorite, but I like it for you!");
    }
}
analyzeColor(3);
analyzeColor('blue');
var colorPreference = prompt("what is your favorite color?");
analyzeColor(colorPreference);

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(randomColor);
analyzeColor(randomColor);

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

function analyzeColorSwitch(x){
    switch(x) {
        case "blue":
            alert("What a coincidence, that's my favorite!");
            break;
        case "red":
            alert("Really? Red is ok...");
            break;
        case "green":
            alert("Like the grass!");
            break;
        case"violet":
            alert("violet bent backwards over the grass");
            break;
        case "yellow":
            alert("like the sun!");
            break;
        case "orange":
            alert("I like that fruit!");
            break;
        case "indigo":
            alert("indigo blue?");
        case isNaN(x) === false:
            alert("Hey that is not a number!");
            break;
    }
}

analyzeColorSwitch('red');


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */
var userColor = prompt("Pick a color.");
analyzeColorSwitch(userColor);


/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(x, y){
    switch(x) {
        case 1:
            alert("your luck number is:" + luckyNumber + "and your total discount applied is" + y- (y * .10));
            break;
        case 2:
            alert(y- (y *.25));
            break;
        case 3:
            alert(y- (y * .35));
            break;
        case 4:
            alert(y- (y * .50 ));
            break;
        case 5:
            alert('free');
            break;
    }
}
calculateTotal(2,100);

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var userTotal = prompt("How much is your total bill?");
calculateTotal(luckyNumber, userTotal);





/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var trueFalse = confirm("would you like to put a number in?");

if (trueFalse === true) {
    var userInput = prompt("Yay, pick a number.");
    if (isNaN(userInput) === false) {
        if(userInput > 0){
            alert("your number is positive!");
            if (userInput % 2 === 0) {
                alert(userInput + ", your number is even!");
                alert(parseInt(userInput) + 100);
            } else {
                alert(userInput + ", your number is odd!");
                alert(parseInt(userInput) +100);
            }
        }else {
            alert("your number is negative!");
            if (userInput % 2 === 0) {
                alert(userInput + ", your number is even!");
                alert(parseInt(userInput) + 100);
            } else {
                alert(userInput + ", your number is odd!");
                alert(parseInt(userInput) +100);
            }
        }
    } else {
        alert("hey that is not a number");
    }
} else {
    alert("Goodbye!");
}






