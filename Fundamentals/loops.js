// For loop
for(let i=0; i<5; i++){
console.log(i)
}

//while loop
let j = 0;
while(j<5){
    console.log(j);
    j++
}
//Checks the condition before entering the loop

// Do while loop
let k = 0;
do{
    console.log(k);
    k++
}while(k<5)
// First executes the loop and then checks the condition , so this ensures that the loop runs atleast once

// for of
const arr = []
for(item of arr){
    console.log(item);
}
// Here it iterates through the array and each item is assigned the index value of the array

// for in
const arr = []
for(index in arr){
    console.log(arr[index])
}
// Here it iterates and gives the key , so this is best for iterating through an object , in case you want to use it for an array , always remember this gives you index and not the value