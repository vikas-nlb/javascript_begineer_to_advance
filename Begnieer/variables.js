// Different variables
var x = 5; // Function scope scoped , can be re-defined and can be re-assigned
let y = 10; // Block scoped ,  can be re-aasigned but can be re-declared
const z = 15; // Block scoped , cant be re-declared or re-assigned

// Hoisting
var x = undefined ;
let y;
const z;
// Hoisting means that irrespective of where the variables are defined , it is moved to the top of the code during execution.
// With let and const , they are moved to the top as just names , for examples , it will only be let y and const z , it wont have any value assigned yet , so if its called before the line which initializes it , its throws an reference not found error
// With var , they are also moved to the top , but here is it assigned undefined as a value , so if var is called before the line which initializes it , it gives undefined as the answer
// Functions are also hoisted , when it starts with keyword function , the entire function is hoisted and can be called before the line of code where its present , but when the function is assigned to a variable like var const or let , it follows the same rules as values 

//Scope
// let and const are block scoped , meaning they are confined to that block , thats within {} . The moment you come out the block let and const will stop to exists
// var is function scoped , meaning they are confined to the function and if no function is present it is confined to global.

// Temporal dead zone ( TDZ )
// As let and const are hoisted , and during hoisting the variable is declared but no value is assigned , so if the code calls variable before the line of code where it is assigned value , it throws an reference error , this is called TDZ . TDZ if the zone between hoisted variable and the line of code where the value is assigned , even though the code knows that the variable is present it wont be accessible 
// var wont be in TDZ as the moment its hoisted , it is assigned the value of undefined

// Why we should not use var
// Its function scope , so basically the code never forgets it 
// Its hoisted and assigned the value undefined , this causes lot of errors and its very difficult to debug