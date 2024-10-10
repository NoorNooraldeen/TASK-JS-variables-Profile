/**
 * Part 1: Creating Variables and Constants
 * In this file you should define the following variables with the exact names
 *
 * 1. fullName      -> assign it a value of your full name
 * 2. yearOfBirth   -> assign it a value of your year of birth
 * 3. hobby         -> assign it a value of your favorite hobby
 * 4. funFact       -> assign it a value of some fun fact about yourself
 * 5. image         -> assign it a value of a url of your image or ant image that represents you online
 */

// Part 1 answer 👇🏻 ...

let fullName = " my name is Noor NoorALDeen";
let yearOfBirth = 2001;
let hobby = " is drawing";
let FunFact = " fun fact about me is that i love chocolate";
const image =
  "https://pixabay.com/photos/tree-sunset-clouds-sky-silhouette-736885/";
console.log(fullName);
console.log(yearOfBirth);
console.log(hobby);
console.log(FunFact);
console.log(image);
const currentYear = 2024;

// part 2 starts hereeeee

const FullNameString = `my name is ${fullName}`;
const yearOfBirthString = ` I am ${currentYear - yearOfBirth} years old `; // i think we need to do some multiplication her?
const hobbyString = ` my hobby is ${hobby}`;
const funFactstring = `fun fact ${FunFact}`;

console.log(FullNameString);
console.log(yearOfBirthString);
console.log(hobbyString);
console.log(funFactstring);

/**
 * Part 3: Re-assignment
 * Increment your hacker score
 * */

let stars = 0;

function incrementBy1() {
  // Increment stars by 1 👇🏻
  stars += 1;
  console.log(stars);
}
function decrementBy1() {
  // decrement stars by 1 👇🏻
  stars -= 1;
  console.log(stars);
}

function incrementBy2() {
  // Increment stars by 2 👇🏻
  stars += 2;
  console.log(stars);
}
function decrementBy2() {
  // decrement stars by 2 👇🏻
  stars -= 2;
  console.log(stars);
}

// not sure if we can use a function like
// function incremantBy2(){
//stars += 2;
//}
// then we call the function
