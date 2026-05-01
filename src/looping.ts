//while
//do while
//for
//nested loop
//for each loop

//while - until a condition is true, the code in the loop gets repeated, when the iterations are unknown

let count = 1;
while(count<=10){
    console.log(count++);
}

//do-while - first it executes the body, then evaluates the condition, use this to repeat the set of statements in the loop atleast once

let step=0;
do{
console.log("count is "+step++);
}while(step<=10)

//for loop - when the number of iterations are known

for(let i=1; i<=20; i++)
    console.log(i);

//nesting of loops

//for each
const fruits = ["fruit1","fruit2", "fruit3"];

fruits.forEach(
    (fruit) => console.log("I like "+fruit)
);
