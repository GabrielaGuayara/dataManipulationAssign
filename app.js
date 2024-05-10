// The initial numbers that must be verified.
const n1 = 20;
const n2 = 5;
const n3 = 10;
const n4 = 15;

// Check one: add up to 50
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;


const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
onsole.log(`The four number are valid according to the provided criteria is ${isValid}`)


//PART 1: MATH PROBLEMS

//Check five: all numbers are divisible by 5
const isDivByFive = ((n1%5)==0)&&((n2%5)==0)&&((n3%5)==0)&&((n4%5)==0);

//Check if the first number is greater than the last one
const isGreaterThanTheFirt = n1>n4;

//Aritmetic Chain
let operation =(((n1-n2)*n3)%n4)

//Check is the numbers are over 25
const isOver25_otherMethod = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;

const isValidPartOne = isDivByFive && isGreaterThanTheFirt && isOver25_otherMethod;

console.log(`The four number are valid according to the provided criteria is ${isValidPartOne}`)

//PART TWO: Pratical Math
/**
 * You are planning a cross-country road trip!
The distance of the trip, in total, is 1,500 miles.
Your car’s fuel efficiency is as follows:
At 55 miles per hour, you get 30 miles per gallon.
At 60 miles per hour, you get 28 miles per gallon.
At 75 miles per hour, you get 23 miles per gallon.
You have a fuel budget of $175.
The average cost of fuel is $3 per gallon.
Set up a program to answer the following questions:
How many gallons of fuel will you need for the entire trip?
Will your budget be enough to cover the fuel expense?
How long will the trip take, in hours?
Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip? 
 */
//Declare variables
const distance = 1500;
const budget = 175;
const cost = 3.00;
const fuelEffiAt55 = 30;
const fuelEffiAt60 = 28;
const fuelEffiAt75 = 23;

//Calculation at traveling at an average of 55
const fuelNeededAt55 = distance/fuelEffiAt55;
const fuelCostAt55 = fuelNeededAt55 * cost;
const duration55 = distance/55;

//Calculation at traveling at an average of 60
const fuelNeededAt60 = distance/fuelEffiAt60;
const fuelCostAt60 = fuelNeededAt60 * cost;
const duration60 = distance/60;

//Calculation at traveling at an average of 75
const fuelNeededAt75 = distance/fuelEffiAt55;
const fuelCostAt75 = fuelNeededAt55 * cost;
const duration75 = distance/75;


//PART THREE: FUTURE EXPLORATION

