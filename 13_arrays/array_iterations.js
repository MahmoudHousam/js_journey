let numbers = [1, 2, 3, 4];

numbers.forEach(function (number, index) {
  console.log(`Number at index ${index} is ${number}`);
});

const patients = [
  { name: "Ahmed", appointment: "2024-01-01" },
  { name: "Mohamed", appointment: "2024-01-02" },
  { name: "Mahmoud", appointment: "2024-01-03" },
];

function setReminders(patient) {
  console.log(
    `Reminder: Hi ${patient.name}! Your next appointment is ${patient.appointment}`
  );
}

patients.forEach(setReminders);

let doubled = numbers.map(function (number) {
  return number * 2;
});

let doubled_2 = numbers.map((number) => number * number);
console.log(doubled);
console.log(doubled_2);

let newNumbersArray = [1, 2, 3, 4, 5, 6];

let newNumbersArray_2 = newNumbersArray.filter((number) => number % 2 === 0);
console.log(newNumbersArray_2);

let newNumbersProcduct = newNumbersArray.reduce((acc, curr) => acc * curr, 1);
console.log(newNumbersProcduct);

let ahmed = patients.find((patient) => patient.name === "Ahmed");
console.log(ahmed);

let mahmoud = patients.findIndex((patient) => patient.name === "Mahmoud");
console.log(mahmoud);

let hasEven = newNumbersArray_2.some((number) => number % 2 === 0);
console.log(hasEven);

let hasNegative = newNumbersArray_2.some((number) => number < 0);
console.log(hasNegative);

let allEven = newNumbersArray_2.every((number) => number % 2 === 0);
console.log(allEven);

let products = [
  { id: 1, name: "Laptop", price: 999, inStock: true },
  { id: 2, name: "Phone", price: 599, inStock: true },
  { id: 3, name: "Tablet", price: 399, inStock: false },
  { id: 4, name: "Watch", price: 199, inStock: true },
];

let underFiveHundred = products
  .filter((product) => product.inStock == true)
  .find((product) => product.price <= 500);
console.log(underFiveHundred);

let underOneThusand = products
  .filter((product) => product.inStock == true)
  .every((product) => product.price < 1000);
console.log(underOneThusand);
