/// 1:- Generate ten random 3 digit number, store in an array
/// Find the second largest and second smallest without using the sort.
let array = new Array();
while (array.length < 10) {
    let number = Math.floor(Math.random() * 1000);
    if (number >= 100 && number <= 999) {
        array.push(number);
        console.log(number);
    }
}
//Second largest number calculated
let max = Math.max.apply(null, array)
array.splice(array.indexOf(max), 1)
max = Math.max.apply(null, array);
console.log("Second largest number: " + max);
//Second smallest number calculated
let min = Math.min.apply(null, array)
array.splice(array.indexOf(min), 1)
min = Math.min.apply(null, array);
console.log("Second smallest number: " + min);

/// 2:- Generate ten random 3 digit number, store in an array
/// Find the second largest and second smallest using the sort
let minMaxArray = new Array();
while (minMaxArray.length < 10) {
    let number = Math.floor(Math.random() * 1000);
    if (number >= 100 && number <= 999) {
        minMaxArray.push(number);
        console.log(number);
    }
}
let sortArray = minMaxArray.sort();
console.log("Second largest number: " + sortArray[sortArray.length - 2]);
console.log("Second smallest number: " + sortArray[1]);

/// 3:- To compute the prime factors of a number passed and store them in an array
const readline = require('readline-sync');
let inputNumber = readline.questionInt("Enter a number: ");
let primeFactorArray = new Array();
for (n = 2; n <= inputNumber; n++) {
    if ((inputNumber % n == 0) && CheckPrime(n) == true)
        primeFactorArray.push(n);}

console.log("Total prime factors : " + primeFactorArray.length);
function CheckPrime(x) {
    let factors = 0;
    for (i = 2; i < x; i++) {
        if (x % i == 0)
            factors++;
    }
    if (factors == 0) {
        return true;
    }
    return false;
}

/// 4:- Return three integer from the array which add upto 0
let numbers = [1, -2, 3, -1, 1];
console.log("Triplets with sum ZERO :")
for (i = 0; i < numbers.length - 2; i++) {
    for (j = i + 1; j < numbers.length - 1; j++) {
        for (k = j + 1; k < numbers.length; k++) {
            if (numbers[i] + numbers[j] + numbers[k] == 0) {
                console.log(numbers[i], numbers[j], numbers[k]);
            }
        }
    }
}

/// 5:- Numbers from 0-100 with same digits
let doubleDigitNumbers = new Array();
for (i = 1; i < 100; i++) {
    if (i % 11 == 0)
        doubleDigitNumbers.push(i);
}
console.log("Double digit numbers : " + doubleDigitNumbers.toString());