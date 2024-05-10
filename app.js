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
console.log(`The four number are valid according to the provided criteria is ${isValid}`)


//PART 1: MATH PROBLEMS

//Check five: all numbers are divisible by 5
const isDivByFive = (((n1%5)&&(n2%5)&&(n3%5)&&(n4%5))==0);

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
//Aplying function to do not repeat myself

function getTripCalculation(speed, fuelEffic){
    const fuelNeeded = distance/fuelEffic;
    const totalcost = cost * fuelNeeded;
    const duration = distance/speed;

    let isPossibleTheTrip = cost <= budget;

    console.log(`At ${speed} miles per HTMLSourceElement. The fuel needed is ${fuelNeeded.toFixed(2)}. The total cost is ${totalcost.toFixed(2)}. The duration of the trip is ${duration.toFixed(2)}. Thus, the statement that the trip is possible is ${isPossibleTheTrip}` )

}

//Invoke functions
getTripCalculation(55, fuelCostAt55)
getTripCalculation(60, fuelCostAt60)
getTripCalculation(75, fuelCostAt75)

