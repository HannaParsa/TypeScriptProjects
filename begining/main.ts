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

//enum is a special class which gives constants
//begins from zero: Directions.Nprth = 0
//default is numeric
enum Directions{
    North,
    South,
    East,
    West

}
//enum can be numeric or string
//DirectionsString.North = "North"
enum DirectionsString {
    North ="North",
    South ="South",
    East ="East",
    West ="West"
}

//interface
interface Rectangle {
    height: number,
    width: number
  }
//interface can extends another interface
interface ColoredRectangle extends Rectangle {
color: string
}

const coloredRectangle: ColoredRectangle = {
height: 20,
width: 10,
color: "red"
};

//function
//the return tyoe is number
function getTime() :number {
    return new Date().getTime();
}
//function 
//with input
function multiply(a:number, b:number):number {
    return a * b;
}

//casting
let x : unknown = "hello";
console.log((<string>x).length);

//classes
class Person{
name : string
age : number
}
const person = new Person()
person.name = "hanna";

//class with constructor
class Person2{
    private name : string
    public constructor(name : string){
        this.name = name
    }
    public getName() : string{
        return this.name
    }
}
function sayIt(person: Person) {
    return person.say();
}

console.log(sayIt(mike))