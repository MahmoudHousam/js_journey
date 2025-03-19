function calculateCircleProperties(radius) {
  let diameter, circumference, area;

  diameter = radius * 2;
  circumference = radius * Math.PI * 2;
  area = radius * radius * Math.PI;

  return { diameter, circumference, area };
}

console.log(calculateCircleProperties((radius = 4)));
