## TypeScript 101

#### Install

`npm install -g typescript`

#### We must complie TS and in order to do so, we type:

`tsc hello.ts` this command will complie the ts version of this file
into a a JavaScript version. Each time you make changes to the TS file, make sure
to run the `tsc filename.js` in terminal to update the JS version. You can
see this in the hello.js and hello.ts files.

#### The Type System

TS type annotation string:String tell us that this is a string type: see types.ts file
Types: can start with upper or lower case

- strings
- numbers
- booleans
- any to allow more then one type, eg; ` array : any [1, 2, "hello", false]`
- type void is used when a function returns nothing

#### Classes

- Properties in a class can not be declared optional, with the ?

#### Modules

- syntax:

````module nameOfModule {
       export class NameOfClass {
           ...code...
       }
    }```
- set up a refrence path to the other module:
``` /// <reference path = "modules.ts" />```

- to combine files into a new file in the term with --out and new fileName:
```tsc modules.ts modulesUtils.ts --out modUtil.js```

#### Auto Compile with w/Grunt

````
