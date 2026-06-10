const name = 'Vikas';
const age = '30';

// Old way
const msg = 'Admin name is ' + name + 'and age is ' + age;

// Template Literals
const message = `Admin name is ${name} and age is ${age}`;

// With template literal , you can directly embed variables inside html
// This works with variables , ternary ( a ? b : c ) or you can call functions (`name.toUpperCase())
// Template literals doesn't work with statements or loops