let globalVar = "This is defined globally across program\n";

function streamFunction() {
  let functionVar = "This is defined within the function scope only\n";
  if (true) {
    let blockVar = "This is defined withing the block scope only\n";
    console.log(globalVar, functionVar, blockVar);
  }
  console.log(globalVar, functionVar); // can't print blockVar because you're out of block scope
}

streamFunction();
console.log(globalVar);
// console.log(functionVar) can't print functionVar because you're out of function scope
