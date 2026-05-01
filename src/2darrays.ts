// const twoDimensionalArray:number[][] = [
//     [1,2,3],
//     [4,5,6]
// ];

// console.log(twoDimensionalArray[1]?.[1]);

const another2dArray: number[][] = [
    [10,20,30],
    [70,34,23],
    [5,667,21]
];

for(let row=0;row<another2dArray.length;row++){
    //for every row, now the next loop iterates over the columnar elements
    const currentRow = another2dArray[row];
    for(let column =0;column<currentRow!.length;column++){
        console.log(another2dArray[row]![column]);
    }
}

//modern and safer approach
for(const row of another2dArray){
    for(const column of row){
        console.log(column);
    }
}