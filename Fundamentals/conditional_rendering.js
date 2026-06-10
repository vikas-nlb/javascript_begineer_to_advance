// if else
    if(true) {
        console.log(true)
    } else if (false) {
        console.log(false)
    } else {
        console.log(undefined)
    }

// switch case
const useCase = true
switch(useCase) {
    case true : return true;
    case false : return false;
    default : return undefined
}

// Ternary
const booleanValue = useCase === true ? true : false;