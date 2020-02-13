
import ReactDOM from 'react-dom';
class Person {
    constructor(name,age = 0 ){
        this.name = name;
    }

    getGreeting(){
        return "HI!!";
    }
}

class Student extends Person{
    constructor(name,age=0,major = 'undecided'){
        super(name,age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }
    getGreeting(){
       let description = super.getGreeting();
       return 'something   ' + description;
    }
}

class Traveler extends Person{
    constructor(name,age,location){
        super(name,age);
        this.location = loction;
    }
}

const me = new Student("Isuru");
console.log(me);
console.log(me.getGreeting());
ReactDOM.render(Person, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

