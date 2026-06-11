// Destructuring is a way of assigning names to distinct array and object variables
const user = {
  name: "Vikas",
  address: {
    city: "Bengaluru",
    pin:  "560001"
  },
  scores: [95, 87, 92]
};

const { name, scores } = user // here we are getting user.name and user.scores but in a better way

const { name: userName, scores: userScores } = user // here we are also setting a alternate name

const { name = 'Amulya', scores = [] } = user // here we are giving a default value to fallback incase the variable is not present

const { name:userName = 'Skanda', scores:userScores = [] } = user // here we are giving alternate names and also setting default values

const { address: { city , pin }} = user // destructuring nested values

const { scores: [ one, two ] } = user // destructuring an array and assigning names to array items