
const person ={
    name:'Isuru',
    age:25,
    location :{
        city:'kandy',
        temp :24
    }
}

const {city,temp:temperature} = person.location;
const {name : firstname = 'defaultName',age} = person;
console.log(`${firstname} ${age}  ${temperature}  ${city}`);


const address= ['77 Arambegama','Pilimathalawa','kandy'];
const [,,bigtown ='defaultValue'] = address;

console.log(address[1]);
console.log(`${bigtown}`);