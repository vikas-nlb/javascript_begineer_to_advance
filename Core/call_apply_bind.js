function introduce(methodUsed, city) {
    console.log(`${methodUsed} : Hello I am ${this.name} and I am from ${city}`);
}
const obj1 = {
    name: 'Vikas'
}
const obj2 = {
    name: 'Amulya'
}

// call
// When you want to set `this` context to any function and want it to be executed immediately
// Ass you can see in the function `introduce' , we are using this.name but its not defined anywhere , so using call we set the context `this`
introduce.call(obj1, 'call', 'Bengaluru');
introduce.call(obj2, 'call' , 'Arsekere');

// apply
// When you want to set `this` context to any function and want it to be executed immediately but the arguments are array
// Ass you can see in the function `introduce' , we are using this.name but its not defined anywhere , so using call we set the context `this`
introduce.apply(obj1, ['apply', 'Bengaluru']);
introduce.apply(obj2, ['apply' , 'Arsekere']);

// bind
// When you want to set `this` context to any function , but don't want to be executed immediately.
// When we use bind , it return a function with `this` binded to it , so you can call this function whenever and this will be accessible to it
const checkBind1 = introduce.bind(obj1, 'bind', 'Bengaluru');
const checkBind2 = introduce.bind(obj2, 'bind', 'Arsekere');
checkBind1();
checkBind2();