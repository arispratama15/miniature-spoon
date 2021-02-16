// declare minimun and max of number before random

// Collect input from a user
const lowNumber = prompt ("What is the min number?");
const highNumber = prompt ("What is the max number?");

// Convert the input to a number
const convLowNumber = +lowNumber;
const convHighNumber = +highNumber;

// condition
if (convHighNumber && convLowNumber){
  // Use Math.random() and the user's number to generate a random number
  //const randomNumber = Math.floor(Math.random() * convHighNumber + convLowNumber); // this equitation is wrong, cause it will randomized from zero to a high number then plus the lownumber
  const randomNumber = Math.floor(Math.random() * (convHighNumber - convLowNumber + 1) + convLowNumber);

  // Create a message displaying the random number
  console.log(`The number is ${randomNumber}, randomized from ${convLowNumber} to ${convHighNumber}`);
}else {
  console.log (`Please provide a number. Try again.`);
}