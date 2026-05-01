//usual functions

function sayHello(): void{
    console.log("hello");
}

sayHello();

function sayHelloToPersonWithName(name: string):void{
    console.log("hello -> "+name);
}

sayHelloToPersonWithName("ska");

function functionThatReturnsAValue(name: string): string{
    return `hello -> ${name}`;
}

console.log(functionThatReturnsAValue("sai krishna"));

function providingOptionalParameters(name: string, age?: number) : string{
    return age? `hello ${name} and ${age}` : `hello ${name}`;
}

console.log(providingOptionalParameters("sai krishna"));
console.log(providingOptionalParameters("sai krishna",42));


//arrow functions
const arithmeticArrow = (number1: number, number2: number): number => number1+number2;
console.log(arithmeticArrow(10,10));

//function overloading
function combineDetails(value1: string, value2: string) : string;
function combineDetails(val1: string, val2: number): number;
function combineDetails(val1: number, val2: string): number;
function combineDetails(val1: number, val2?: string): number;
function combineDetails(...args: any[]): any;

function combineDetails(...args: any[]) : any {
    return args.reduce((acc, val) => acc + val, '');
}

console.log(combineDetails("hello","100"));
console.log(combineDetails("hello","anasinga"));
console.log(combineDetails("hello",100));
console.log(combineDetails(200,"100"));
console.log(combineDetails(200,"100",300,"400"));
console.log(combineDetails(200));

