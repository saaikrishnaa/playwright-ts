import {faker} from '@faker-js/faker';



const names:string[] = new Array(5);
for(let nameOfStudent of names){
    nameOfStudent = faker.person.firstName();
    console.log(nameOfStudent);
}
