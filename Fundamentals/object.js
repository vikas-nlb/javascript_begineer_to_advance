// Object is a JavaScript collection of keys and values
const obj = {
    name: 'Vikas',
    age: 30
}
// Creation
//Method 1 - Object literals
const literalObj = {
    name: 'Skanda',
    age: 26
}
//Method 2 - Object creation
const creationObj = new Object(); // same as {}
creationObj.name = 'Amulya'
creationObj.age =27

// Accessing object values
// Method 1 - dot .
obj.name
//Method 2 - []
obj['name']

// Adding new key value'
obj.location = 'Bengaluru'

// Updating value
obj.location = 'Binny layout'

// Deleting key
delete obj.location

//Check if key is present
//Method 1 - in
const one = 'age' in obj;
//Method 2 - hasOwnProperty
const two =  obj.hasOwnProperty(age)
