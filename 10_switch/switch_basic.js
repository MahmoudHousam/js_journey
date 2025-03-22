let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday;";
    break;
  case 2:
    dayName = "Tuseday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Satuday";
  case 7:
    dayName = "Sunday";
  default:
    dayName = "Invalid day!";
}

console.log(dayName);

let fruit = "apple";
let response;

switch (fruit) {
  case "banana":
    response = "Banana is good!";
    break;
  case "apple":
    response = "How do you like them apples?";
  // break
  case "orange":
    response += " Orange you glad I didn't say banana again?";
    break;
  default:
    response = "I'm not familiar with that fruit.";
}

console.log(response);
// Notice that without the break statement, the program will continue to the next case even if no match exist

let grade = "A";
let feedback;

switch (grade) {
  case "A" || "B":
    feedback = "Good Job!";
    break;
  default:
    feedback = "Please enter your grade!";
}

console.log(feedback);
