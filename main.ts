interface Person {
    age: number,
    name: string,
    say(): string
}

let mike = {
    age: 25, 
    name:"Mike", 
    say: function() { 
        return "My name is " + this.name + 
               " and I'm " + this.age + " years old!"
    }
}

let isTrue: boolean = false;
let param: any = 'canBeAnyThing';
Math.round(param);
//no error bevause the param's type is any

let un: unknown = 'unkown';
//no error and safer than any
const array: string[] = []

function sayIt(person: Person) {
    return person.say();
}

console.log(sayIt(mike))