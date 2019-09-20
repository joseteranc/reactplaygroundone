const numbers = [1, 6, 2];
const firstNumber = numbers[0];
const secondNumber = numbers[1];
const thirdNumber = numbers[2];

// Array destructoring
//    [1,     6,      2    ]
const [first, second, third] = numbers;

// first equals firstNumber
// second equals seconNumber
// third equals thirdNumber

console.log(numbers, firstNumber, secondNumber, thirdNumber);
console.log(first, second, third);

// const [password, setPassword] = React.useState("");
// const state = React.useState("");
// const password = state[0];
// const setPassword = state[1];

function useState(defaultValue) {
  let value = defaultValue;

  function setValue(newValue) {
    value = newValue;
    // rerender React component
  }

  return [value, setValue];
}

const [value, setValue] = useState("Initial Value");
console.log(value, setValue);

// Object destructoring

const user = {
  lastName: "Machens",
  firstName: "Leon",
  phone: 123
};
const secondUser = {
  lastName: "Machens",
  firstName: "Carolin",
  phone: 123
};

// const lastName = user.lastName;
// const firstName = user.firstName;
//const { lastName, firstName } = user;

function logNames({ firstName, lastName }) {
  console.log(firstName, lastName);
}
// function logNames(user) {
//   const lastName = user.lastName;
//   const firstName = user.firstName;
//   console.log(firstName, lastName);
// }
logNames(user);
logNames(secondUser);
