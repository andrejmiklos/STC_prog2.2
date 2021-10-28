"use strict";
// BEFORE YOU RUN START, DO NOT FORGET THIS COMMAND: cd zadanie2.2
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import class Messages from file
const Messages_1 = __importDefault(require("./Messages"));
// makes empty array called myFinalArray
let myFinalArray = [];
// makes empty array called evens
let evens = [];
// makes empty array called odds
let odds = [];
// makes empty array called evensBy9
let evensBy9 = [];
// makes empty array called evensBy8
let evensBy8 = [];
// makes empty array called evensBy7
let evensBy7 = [];
// makes empty array called evensBy6
let evensBy6 = [];
// makes empty array called evensBy5
let evensBy5 = [];
// makes empty array called evensBy4
let evensBy4 = [];
// makes empty array called evensBy3
let evensBy3 = [];
// makes empty array called evensBy2
let evensBy2 = [];
// makes empty array called evensBy1
let evensBy1 = [];
// makes empty array called primes
let primes = [];
// makes variable of type Number which has strict value or you can also choose MAX_SAFE_INTEGER as maximum
// In case you put as maximumm the second one, there is a high chance of not getting even number.
//let max: number = Number.MAX_SAFE_INTEGER;
let max = 100000;
/**
 * Makes variable called arrayInfo. It's type is Messages.
 * Variable contains different messages which we can call back later by their names.
 */
let arrayInfo = new Messages_1.default("This is array of random numbers:", "Those are even numbers:", "Those are odd numbers", "Those are even numbers divisible by number 9:", "Those are even numbers divisible by number 8:", "Those are even numbers divisible by number 7:", "Those are even numbers divisible by number 6:", "Those are even numbers divisible by number 5:", "Those are even numbers divisible by number 4:", "Those are even numbers divisible by number 3:", "Those are even numbers divisible by number 2:", "Those are even numbers divisible by number 1:", "Those are prime numbers:");
/**
 * Gets random num
 * @param max This variable determines the max value of random number.
 * @returns  Function returns random number in range from 0 to 10 000/ Number.MAX_SAFE_INTEGER.
 */
function getRandomNum(max) {
    return Math.floor(Math.random() * max);
}
/**
 * This function start function getRandomNum, gets it's return and pushes it to myFinalArray.
 */
function PUSH() {
    getRandomNum(max);
    let RandomNumber = getRandomNum(max);
    myFinalArray.push(RandomNumber);
}
/**
 * Defines how many times must function PUSH repeat. => This function repeats 100 times function PUSH.
 * @param times Number which index can not exceed.
 */
function repeat(times = 100) {
    for (let i = 0; i < times; i++) {
        PUSH();
    }
}
repeat();
/**
 * This function divides and pushes elements (numbers) from myFinalArray to arays evens and odds.
 * It is based on logical test.
 */
function divide() {
    myFinalArray.forEach(element => {
        if (element % 2 == 0) {
            evens.push(element);
        }
        else {
            odds.push(element);
        }
    });
}
divide();
/**
 * This function gets:
 * even numbers divisible by numbers from 9 to 1,
 * odds numbers which are prime,
 * and pushes them to their arrays
*/
function getNumbsDivisibleBy() {
    evens.forEach(element => {
        if (element % 9 == 0) {
            evensBy9.push(element);
        }
    });
    evens.forEach(element => {
        if (element % 8 == 0) {
            evensBy8.push(element);
        }
    });
    evens.forEach(element => {
        if (element % 7 == 0) {
            evensBy7.push(element);
        }
    });
    evens.forEach(element => {
        if (element % 6 == 0) {
            evensBy6.push(element);
        }
    });
    evens.forEach(element => {
        if (element % 5 == 0) {
            evensBy5.push(element);
        }
    });
    evens.forEach(element => {
        if (element % 4 == 0) {
            evensBy4.push(element);
        }
    });
    evens.forEach(element => {
        if (element % 3 == 0) {
            evensBy3.push(element);
        }
    });
    evens.forEach(element => {
        if (element % 2 == 0) {
            evensBy2.push(element);
        }
    });
    evens.forEach(element => {
        if (element % 1 == 0) {
            evensBy1.push(element);
        }
    });
    odds.forEach(element => {
        for (var i = 2; i < element; i++)
            if (element % i === 0)
                return false;
        primes.push(element);
    });
}
getNumbsDivisibleBy();
/**
 * This variable is type Resum and contains resum message and resum number.
 */
let OutputsResum = {
    resumMessage: "Total number of arrays:",
    resumNumber: 13,
};
// Shows array myFinalArray and it's message.
console.log(arrayInfo.getMessageMyFinalArray(), myFinalArray);
// Shows array evens and it's message.
console.log(arrayInfo.getMessageEvens(), evens);
// Shows array odds and it's message.
console.log(arrayInfo.getMessageOdds(), odds);
// Shows array evensBy9 and it's message.
console.log(arrayInfo.getMessageEvensBy9(), evensBy9);
// Shows array evensBy8 and it's message.
console.log(arrayInfo.getMessageEvensBy8(), evensBy8);
// Shows array evensBy7 and it's message.
console.log(arrayInfo.getMessageEvensBy7(), evensBy7);
// Shows array evensBy6 and it's message.
console.log(arrayInfo.getMessageEvensBy6(), evensBy6);
// Shows array evensBy5 and it's message.
console.log(arrayInfo.getMessageEvensBy5(), evensBy5);
// Shows array evensBy4 and it's message.
console.log(arrayInfo.getMessageEvensBy4(), evensBy4);
// Shows array evensBy3 and it's message.
console.log(arrayInfo.getMessageEvensBy3(), evensBy3);
// Shows array evensBy2 and it's message.
console.log(arrayInfo.getMessageEvensBy2(), evensBy2);
// Shows array evensBy1 and it's message.
console.log(arrayInfo.getMessageEvensBy1(), evensBy1);
// Showa array primes and it's message
console.log(arrayInfo.getMessagePrimes(), primes);
// Shows variables resumMessage and resumNumber. Both are type Resum.
console.log(OutputsResum.resumMessage, OutputsResum.resumNumber);
