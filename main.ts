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
array.push("first param")

//tuple = typed array
let tuple :[number, boolean, string] 
tuple = [1, true , 'first param']
//we have two types of tuples: 
//1) we can push and add
//2)readOnly tuple and we can not push and add
let readOlnyTuple : readonly [number, boolean] = [1, false]

//object type
let car: {type : string , year : number}={
    type : "toyota",
    year : 2000
}

//index signature
const manageAge : { [index: string]: number}={}
manageAge.hanna = 21


function sayIt(person: Person) {
    return person.say();
}

console.log(sayIt(mike))