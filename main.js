const age = 32;
const firstName = 'Marcin';

/* 
console.log(firstName, age);
const heading = document.querySelector('h1');
console.log(heading.innerHTML);
heading.innerHTML =  `Hej, Mam na imie ${firstName}, i mam ${age} lat `;
console.log(heading.innerHTML); */

/*console.log(emptyParagraph.innerHTML); 

function calculate(myNumber) {
  console.log(`DOstalam ${myNumber}`);
  myNumber = myNumber*7;
  return myNumber;
}

const myResult = calculate(age);
console.log(myResult);
console.log(age);*/

function greet(age, firstName) {
  console.log(
    `Hej, Mam na imie ${firstName}, i mam ${age} lata`
  );
}
greet(21, 'Marcin');

function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}

/*createContent('.article__text--js', 'Good morning');
createContent('.footer__wrapper-js', 'Siema siema!'); */

/* Fat arrow function ;*/

const newGreet = (age, firstName) => {
  console.log(
    `Hej, Mam na imie ${firstName}, i mam ${age} lata`
  );
}
newGreet(11, 'Marek');

/* Homework week 5. functions
function greetings(myName, myAge) {
  let myName = prompt("Please enter your name");
  let myAge = prompt("Please enter your age");
  return(alert(`Hej, Mam na imie ${myName}, i mam ${myAge} lata`));
}

 greetings(myName, myAge); */

/* const greeting = (newName, newAge) => {
  let myName = prompt("Please enter your name");
  let myAge = prompt("Please enter your age");
  alert("Hello " + myName + ", it looks like you are " + myAge + " years old!");
}
greeting();*/

if (2 == '2') {
  console.log('Java to nie JS!')
}

console.log(typeof 2);
console.log(typeof '2');

/*
if (humanOne.age > humanTwo.age) {
  console.log('Human one jest starszy');
} else if (humanOne.age === humanTwo.age) {
  console.log('sa rownolatkami');
} else {
  console.log('Human Two jest starszy');
} */

if (!('JAvascript' == 'Java')) {
  console.log('Java to nie JS!')
}

const myNumber = 8;

switch (myNumber) {
  case 7:
    console.log('jestem siodemka');
  break;
  case 9:
    console.log('jestem dziewiatka');
  break;
  default:
    console.log('jestem inna cyfra');
}

const result = (32 > 20) ? {name: 'Marcin'} : console.log('to nie prawda');

console.log(result);

const button = document.querySelector('.action--js');
console.log(button);


/* const myClick = () => {
  const heading = document.querySelector('.main__heading--js');
  console.log(heading.innerHTML);
  heading.innerHTML =  `Hej, Mam na imie Jakos, i mam iles lat `;
}

button.addEventListener('click', (myClick)); 

button.addEventListener('click', () => {
  const heading = document.querySelector('.main__heading--js');
  heading.innerHTML =  `Hej, Mam na imie Jakos, i mam iles lat `;
  heading.classList.toggle('klasa-z-js');
}); */


const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
  const nav = document.querySelector('.navigation--js');
  nav.classList.toggle('navigation--open');
});