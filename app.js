// The initial numbers that must be verified.
const n1 = 16;
const n2 = 5;
const n3 = 6;
const n4 = 35;

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
console.log(isValid);
