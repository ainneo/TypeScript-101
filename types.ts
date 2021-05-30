//The Type System

var n : Number = 1;
var a : String = "string";
var b : Boolean = true;

//Arrays - define array as a vector
var dogNames : String[] = ["Jon", "Rick", "Arya"];
var allTypes : any[] = ["Jon", "Rick", "Arya", 1, 5, false];

//TS enum method is a way to store built in vars
const enum Names {Jon,Bran,Eddard,Cat}; //set of strings or keys to refer to 

var cat : Names = Names.Cat;
var dog : Names = Names.Bran;

//type void is used when a function returns nothing
function message () : String {
    return "hello world"
};

function getNames () : void {
    console.log("winter is coming")
};


//interfaces
//create interface obj, name and assign it to the function we are using it in
//basically sets the prop and values as required params
//but we can make age optional... by placing a ? after it
interface namesFix {
    name: string; //required param
    age?: number //optional param
}

function printNom(names : namesFix) : void {
    console.log(names.name)
};
printNom({name:"Ainne"})
// printNom({label:"Sugar"}) //should rtn error - to prevent this, we use interface
