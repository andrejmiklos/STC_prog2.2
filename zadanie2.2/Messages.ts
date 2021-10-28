/**
 * This class contains info about every message and makes it accessible
 */
 class Messages {
    
    // makes private variables of type String
    private messagemyFinalArray: String;
    private messageevens: String;
    private messageodds: String;
    private messageevensBy9: String;
    private messageevensBy8: String;
    private messageevensBy7: String;
    private messageevensBy6: String;
    private messageevensBy5: String;
    private messageevensBy4: String;
    private messageevensBy3: String;
    private messageevensBy2: String;
    private messageevensBy1: String;
    private messagePrimes: String;
    
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
    constructor(_messagemyFinalArray: String, _messageevens: String, _messageodds: String, _messageevensBy9: String, _messageevensBy8: String, _messageevensBy7: String, _messageevensBy6: String, _messageevensBy5: String, _messageevensBy4: String, _messageevensBy3: String, _messageevensBy2: String, _messageevensBy1: String, _messagePrimes:String) {
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
    public getMessageMyFinalArray(): String {
        return this.messagemyFinalArray;
    }
    /**
     * Public function which makes variable messageevens accessible in other classes.
     * @returns message evens 
     */
    public getMessageEvens(): String {
        return this.messageevens;
    }
    /**
     * Public function which makes variable messageodds accessible in other classes.
     * @returns message odds 
     */
    public getMessageOdds(): String {
        return this.messageodds;
    }
    /**
     * Public function which makes variable messageevensBy9 accessible in other classes.
     * @returns message evens by 9 
     */
    public getMessageEvensBy9(): String {
        return this.messageevensBy9;
    }
    /**
     * Public function which makes variable messageevensBy8 accessible in other classes.
     * @returns message evens by 8 
     */
     public getMessageEvensBy8(): String {
        return this.messageevensBy8;
    }
    /**
     * Public function which makes variable messageevensBy7 accessible in other classes.
     * @returns message evens by 7
     */
     public getMessageEvensBy7(): String {
        return this.messageevensBy7;
    }
    /**
     * Public function which makes variable messageevensBy6 accessible in other classes.
     * @returns message evens by 6 
     */
     public getMessageEvensBy6(): String {
        return this.messageevensBy6;
    }
    /**
     * Public function which makes variable messageevensBy5 accessible in other classes.
     * @returns message evens by 5 
     */
     public getMessageEvensBy5(): String {
        return this.messageevensBy5;
    }
    /**
     * Public function which makes variable messageevensBy4 accessible in other classes.
     * @returns message evens by 4 
     */
     public getMessageEvensBy4(): String {
        return this.messageevensBy4;
    }
    /**
     * Public function which makes variable messageevensBy3 accessible in other classes.
     * @returns message evens by 3
     */
     public getMessageEvensBy3(): String {
        return this.messageevensBy3;
    }
    /**
     * Public function which makes variable messageevensBy2 accessible in other classes.
     * @returns message evens by 2 
     */
     public getMessageEvensBy2(): String {
        return this.messageevensBy2;
    }
    /**
     * Public function which makes variable messageevensBy1 accessible in other classes.
     * @returns message evens by 1
     */
     public getMessageEvensBy1(): String {
        return this.messageevensBy1;
    }
    /**
     * Public function which makes variable messagePrimes accessible in other classes.
     * @returns message primes
     */
     public getMessagePrimes(): String {
        return this.messagePrimes;
    }
    
}

//exports class
export default Messages;