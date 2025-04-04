let user = {
  name_: "John",
  age: 30,
  city: "New York",
};

// Basic destructuring
let { name_, age } = user;
console.log(name_);
console.log(age);

// Destructuring with different variable names
let { name_: userName, age: userAge } = user;
console.log(userName);
console.log(userAge);

// Destructuring with default values
let { name__, country = "USA" } = user;
console.log(country);

let user2 = {
  name___: "John",
  age_: 30,
  city: "New York",
  country: "USA",
};

// Using rest operator
let { name___, age_, ...rest } = user2;
console.log(name___);
console.log(age_);
console.log(rest);
