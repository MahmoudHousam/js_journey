let fruits = ["apple", "banana", "orange", "grape"];

for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit number ${i + 1} is ${fruits[i]}`);
}

for (let i = fruits.length; i > 0; i--) {
  console.log(`Fruit number ${i} is ${fruits[i - 1]}`);
}

for (let fruit of fruits) {
  console.log(`${fruit}`);
}
