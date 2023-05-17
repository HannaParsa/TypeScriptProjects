var mike = {
    age: 25,
    name: "Mike",
    say: function () {
        return "My name is " + this.name +
            " and I'm " + this.age + " years old!";
    }
};
function sayIt(person) {
    return person.say();
}
console.log(sayIt(mike));
