let user = {
  name: "Mahmoud",
  age: 30,
  job: "data analyst",
};

for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}

let product = {
  name: "Laptop",
  price: 999,
  inStock: true,
};

Object.keys(product).forEach((key) => {
  console.log(product[key]);
});

Object.values(product).forEach((value) => {
  console.log(value);
});
