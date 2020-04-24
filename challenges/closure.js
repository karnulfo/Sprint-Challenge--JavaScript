// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
//It can access it because the function nested function is part of the same function in which the variable internal is part of. Basically, interal will be available only to the brackets within myFunction.

/* Task 2: Counter */
function sumation(parameter){
  let counter = 0;
  for (let i=0; i <= parameter; i++){
    counter += i
  }
return counter;
  
}
console.log (sumation(4));
/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
