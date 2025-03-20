let tempreture = 50;

if (tempreture > 30) {
  console.log(`it's hot today. The tempreture is ${tempreture}`);
}

console.log("End of program!");

let hour = 11;

if (hour < 12) {
  console.log("Good morning");
} else {
  console.log("Good afternoon!");
}

let score = 85;

if (score >= 90) {
  console.log("A grade");
} else if (score >= 80) {
  console.log("B grade");
} else if (score >= 70) {
  console.log("C grade");
} else {
  console.log("Needs improvement");
}

let num = 15;

if (num > 0) {
  console.log(`${num} is positive`);
  if (num % 2 === 0) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is is odd`);
  }
} else {
  console.log(`${num} is zero or negative`);
}
