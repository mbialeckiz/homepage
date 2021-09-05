console.log('siema ziom!');
console.log("siemano znow!");

var person = prompt("Please enter your name", );

if (person == null || person == "") {
  txt = "User cancelled the prompt.";
} else {
  txt = "Hello " + person + "! How are you today?";
  alert(`I wish you a good day, ${person}.`);
}

age = 32;

function calculate(myNumber) {
  console.log(`Dostalam ${myNumber}`);
  return myNumber*7;
}

const myResult = calculate(age);

console.log(myResult);