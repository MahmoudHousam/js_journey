function add(a, b) {
  return a + b;
}

let x = add(5, 3);
console.log(x);

function grade(score) {
  if (score >= 80) {
    return "A";
  }
  if (score < 80 && score > 60) {
    return "B";
  }
  if (score <= 60 && score > 40) {
    return "C";
  }
  if (score <= 40) {
    return "D";
  }
}

console.log(grade(29));
console.log(grade(67));
console.log(grade(43));
console.log(grade(82.5));
