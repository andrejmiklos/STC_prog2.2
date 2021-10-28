"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This class contains info about every message and makes it accessible
 */
class Messages {
    /**
     * Creates an instances of messages.
     * Params below are inputs for making variables accessible in this class
     * @param _messagemyFinalArray
     * @param _messageevens
     * @param _messageodds
     * @param _messageevensBy9
     * @param _messageevensBy8
     * @param _messageevensBy7
     * @param _messageevensBy6
     * @param _messageevensBy5
     * @param _messageevensBy4
     * @param _messageevensBy3
     * @param _messageevensBy2
     * @param _messageevensBy1
     * @param _messagePrimes
     */
    constructor(_messagemyFinalArray, _messageevens, _messageodds, _messageevensBy9, _messageevensBy8, _messageevensBy7, _messageevensBy6, _messageevensBy5, _messageevensBy4, _messageevensBy3, _messageevensBy2, _messageevensBy1, _messagePrimes) {
        this.messagemyFinalArray = _messagemyFinalArray;
        this.messageevens = _messageevens;
        this.messageodds = _messageodds;
        this.messageevensBy9 = _messageevensBy9;
        this.messageevensBy8 = _messageevensBy8;
        this.messageevensBy7 = _messageevensBy7;
        this.messageevensBy6 = _messageevensBy6;
        this.messageevensBy5 = _messageevensBy5;
        this.messageevensBy4 = _messageevensBy4;
        this.messageevensBy3 = _messageevensBy3;
        this.messageevensBy2 = _messageevensBy2;
        this.messageevensBy1 = _messageevensBy1;
        this.messagePrimes = _messagePrimes;
    }
    /**
     * Public function which makes variable messagemyFinalArray accessible in other classes.
     * @returns my final array message
     */
    getMessageMyFinalArray() {
        return this.messagemyFinalArray;
    }
    /**
     * Public function which makes variable messageevens accessible in other classes.
     * @returns message evens
     */
    getMessageEvens() {
        return this.messageevens;
    }
    /**
     * Public function which makes variable messageodds accessible in other classes.
     * @returns message odds
     */
    getMessageOdds() {
        return this.messageodds;
    }
    /**
     * Public function which makes variable messageevensBy9 accessible in other classes.
     * @returns message evens by 9
     */
    getMessageEvensBy9() {
        return this.messageevensBy9;
    }
    /**
     * Public function which makes variable messageevensBy8 accessible in other classes.
     * @returns message evens by 8
     */
    getMessageEvensBy8() {
        return this.messageevensBy8;
    }
    /**
     * Public function which makes variable messageevensBy7 accessible in other classes.
     * @returns message evens by 7
     */
    getMessageEvensBy7() {
        return this.messageevensBy7;
    }
    /**
     * Public function which makes variable messageevensBy6 accessible in other classes.
     * @returns message evens by 6
     */
    getMessageEvensBy6() {
        return this.messageevensBy6;
    }
    /**
     * Public function which makes variable messageevensBy5 accessible in other classes.
     * @returns message evens by 5
     */
    getMessageEvensBy5() {
        return this.messageevensBy5;
    }
    /**
     * Public function which makes variable messageevensBy4 accessible in other classes.
     * @returns message evens by 4
     */
    getMessageEvensBy4() {
        return this.messageevensBy4;
    }
    /**
     * Public function which makes variable messageevensBy3 accessible in other classes.
     * @returns message evens by 3
     */
    getMessageEvensBy3() {
        return this.messageevensBy3;
    }
    /**
     * Public function which makes variable messageevensBy2 accessible in other classes.
     * @returns message evens by 2
     */
    getMessageEvensBy2() {
        return this.messageevensBy2;
    }
    /**
     * Public function which makes variable messageevensBy1 accessible in other classes.
     * @returns message evens by 1
     */
    getMessageEvensBy1() {
        return this.messageevensBy1;
    }
    /**
     * Public function which makes variable messagePrimes accessible in other classes.
     * @returns message primes
     */
    getMessagePrimes() {
        return this.messagePrimes;
    }
}
//exports class
exports.default = Messages;
