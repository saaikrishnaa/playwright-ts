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