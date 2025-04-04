let user = {
  name: "Ahmed",
  age: 30,
};

let userCopy = { ...user };
console.log(Object.hasOwn(user, "name"));
console.log(user.hasOwnProperty("name"));
console.log(Object.hasOwn(user, "height"));
console.log("name" in user);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(userCopy);

let newUser = {
  name: "Ahmed",
  age: 30,
  greet() {
    console.log(`Hi, my name is ${this.name} and my age is ${this.age}`);
  },
};
newUser.greet();
console.log(newUser.name, newUser.age);

let calculator = {
  value: 0,
  add(number) {
    this.value += number;
  },
  subtract(number) {
    this.value -= number;
  },
};

console.log(calculator.value);
calculator.add(5);
console.log(calculator.value);
calculator.subtract(3);
console.log(calculator.value);
