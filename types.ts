// Standard types
let myString: string;
let myNum: number;
let myBoolean: boolean;
let myAny: any;

// Other types
/*
let strArr: string[]; 
let numArr: num[]; 
let booleanArr: boolean[]; 
*/
let strArr: Array<string>;
let numArr: Array<number>;
let booleanArr: Array<boolean>;

let strNumTuple: [string, number, boolean];

myString = 'Hello World'.slice(0,3); // It will take first 3 character
myNum = 222;
myBoolean = true;
strArr = ['Hello', 'World'];
numArr = [1, 2, 3];
booleanArr = [true, false, true];

strNumTuple = ['Amartaivan', 18, true];

let myVoid:void = null; // can be null or undefined
let myNull:null = null; // can be undefined
let myUndefined:undefined = undefined; // can be null

console.log(strNumTuple);