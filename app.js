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