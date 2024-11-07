//object
let support = { 0: "vivian", 1: "sky", 2: "lily" };
//array
let supportType = ["Cat", "Dog"];
supportType[2] = "Spider";
// dot notation is static
support.one = "Cat";

// bracket notation is dynamic
let choice = "three";
support[choice] = "Spider";

//function       v- parameter
function gather(individual) {
  console.log(support[individual], "is a", supportType[individual]);
}

function square(number) {
  return number * number;
}
//     v- argument
gather(0);
console.log(square(4));
// console.log("vivian+sky+lily");
