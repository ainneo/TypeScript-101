//The Type System
var n = 1;
var a = "string";
var b = true;
//Arrays - define array as a vector
var dogNames = ["Jon", "Rick", "Arya"];
var allTypes = ["Jon", "Rick", "Arya", 1, 5, false];
; //set of strings or keys to refer to 
var cat = 3 /* Cat */;
var dog = 1 /* Bran */;
//type void is used when a function returns nothing
function message() {
    return "hello world";
}
;
function getNames() {
    console.log("winter is coming");
}
;
function printNom(names) {
    console.log(names.name);
}
;
printNom({ name: "Ainne" });
printNom({ label: "Sugar" }); //should rtn error - to prevent this, we use interface
