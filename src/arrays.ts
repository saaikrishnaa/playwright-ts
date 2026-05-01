const givenNumbers:number[] = [1,2,34,5,5754,34,234];
console.log(givenNumbers.length);

for(let i = 0; i< givenNumbers.length; i++)
    console.log(givenNumbers[i]);

const numberedArray: number[] = new Array(20);
for(let i=0;i<numberedArray.length;i++){
    console.log(numberedArray[i]=Math.trunc(Math.random()*1000));
}


const anotherIntArray:number[] = new Array(5);
for(const valueAtIndex of anotherIntArray){
    anotherIntArray[valueAtIndex] = Math.random()*10000;
    console.log(anotherIntArray[valueAtIndex]);
}

const array: number[] = new Array(5);
for(let i=0; i<=array.length-1; i++){
    console.log(array[i] = Math.floor(Math.random()*1000));
}

for(let i=array.length-1;i>=0;i--)
    console.log(array[i]);
