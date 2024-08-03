//S4 Practice
console.log("hi");
//L1 object and function
let person = {
  Name: "Shalak",
  Age: 21,
  Country: "Bangladesh.",
};
function logData() {
  console.log(
    person.Name +
      " is " +
      person.Age +
      " years old and lives in " +
      person.Country
  );
}
logData();

//L3 if else

let age = 15;

if (age < 6) {
  console.log("Free");
} else if (age < 18) {
  console.log("child discount");
} else if (age < 27) {
  console.log("student discount");
} else if (age < 67) {
  console.log("Full price");
} else {
  console.log("Senior citizen discount");
}
//L4 pop,push,shift, unshift
let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

largeCountries.pop();

largeCountries.push("Pakisthan");
console.log(largeCountries);
largeCountries.shift();
largeCountries.unshift("China");

console.log(largeCountries);

//L5 logical Operators

//L6 random items from array

let hands = ["rock", "paper", "scissor"];

function gethand(){
  let randomindex = Math.floor(Math.random()* hands.length)
  return  hands[randomindex]
}
console.log(gethand())  

