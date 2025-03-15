"use strict";

let x = 3.14;
console.log(x);

function strictMode() {
  "use strict";
  let x = 3.14;
  let z = 42;
  console.log(x, z);
}

strictMode();
