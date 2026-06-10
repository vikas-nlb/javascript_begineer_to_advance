// Data Types
// Primitive - Number , String , boolean , undefined , null , bigInt , symbol
// Reference -  Everything else is an object like [], {}, Date , Map , Set
// Typeof null is an object
// typeOf function is a function

// Primitive vs Reference
let a =10;
let b = a;
b = 100;
// The value of a = 10 and b = 100 , as this is a primitive data type and the values get assigned to b when a = b

let x = { name:'Vikas' }
let y = x;
y.name = 'Amulya'
// The value of x.name = Amulya and y.name = Amulya . This is because here when y = x then y starts to point to the same location as x , so any changes ni one will lead to changes in the other.
// To solve this we can use copy. There are 2 types of copy , one is shallow copy where only one layer is copied and nested properties still point to the same reference , deep copy solves this by making a unique copy

// == and ===
// == -> compare only the value irrespective of the typeOf , for example
1 == '1' // true
0 == 'false' // true as 0 is false and 1 is true
// === -> compares the value and the typeOf
1 === '1' // false
0 === 'false' // false

// Implicit coercion
// + is very tricky as it acts both as addition of numbers and concatenation of string
// It always takes place from left to right 
// 1 + 2 + '3' = '33';
// '1' + 2 + 3 = '123';
// true + true = 2 as true is coerced to 1
// 'true' + 1 = 'true1'
// [] + [] = [] as both are empty
// [] + {} = [object Object]