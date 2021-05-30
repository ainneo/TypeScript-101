//classes can not be declared optional
//but you can impletment interfaces with optional properties
var Animal = /** @class */ (function () {
    function Animal() {
        this.name = "Ainne";
        this.saying = Animal.flower;
    }
    ;
    Animal.prototype.hello = function (person) {
        console.log("hello " + person);
    };
    ;
    Animal.flower = "rose";
    return Animal;
}());
var catty = new Animal();
catty.saying = "winter is coming";
console.log(Animal.flower); // node classes.js in term to print rose
catty.hello("Ainne"); //node classes.js it will print in the term
