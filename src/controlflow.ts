const randomNumber = Math.floor(Math.random() * 3);

console.log(randomNumber);

if (randomNumber === 0)
    console.log("random number is 0");
else if (randomNumber === 1)
    console.log("random number is 1");
else if (randomNumber === 2)
    console.log("random number is 2");
else
    console.log("random number is either 3 or 4");


//======================================
switch(randomNumber){
    case 0:
        console.log("random number is 0");
        break;
    case 1:
        console.log("random number is 1");
        break;
    case 2:
        console.log("random number is 2");
        break;
    default:
        console.log("random number is either 3 or 4");
        break;
}
