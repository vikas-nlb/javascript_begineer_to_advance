//Logical OR
const value = userInput || 'No input'
// If user input is not present then 'No input' is set to value.
// Problem is if userInput is '' ( empty string) then also 'No input' is set which is a bug

// Nullish coalescing  ??
const value = userInput ?? 'No input'
// value is set to 'No input' only if userInput is null or undefined , in aller cases it is set to what ever the value of userInput

// optional Chaining ?
const user = {
    name: 'Vikas',
    details: {
        address: {
            city: 'Bengaluru'
        }
    }
}
const cityName = user && user.details && user.details.address && user.details.address.city
// Rather than doing all these to check if city is present or not , we can use ? to make it work without errors
const cityNameGiven = user?.details?.address?.city;
// Here if city is present if will assign the value to the variable if not it will assign it undefined without any errors