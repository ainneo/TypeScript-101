//classes can not be declared optional
//but you can impletment interfaces with optional properties
class Animal {
    name: String = "Ainne";
    static flower: String = "rose";
    saying: String;

    constructor(){
        this.saying = Animal.flower
    };

    hello(person:string){
        console.log("hello " + person)
    };

}

var catty = new Animal();
catty.saying = "winter is coming"
console.log(Animal.flower) // node classes.js in term to print rose
catty.hello("Ainne") //node classes.js it will print in the term