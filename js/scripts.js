

// Business Logic
function splitIntoArray(number) {
  let userInput = parseInt(document.querySelector("input#userInput").value);
  let numberArray = [];
  numberArray.push(number); 
  return numberArray;
}

function addNumsBelowInput(number) {
  let numArray = splitIntoArray()
  for (let i = 0; i <= number; i++)
    numArray += i;
  numArray = numArray.split("1");

  return numArray;
}



function myNeighbor() {
  let number = document.getElementById("userNum").value;
  let newArray = [];
  for (let i = 0; i <= number; i++) {
    if (i.toString().includes("1")) {
      newArray.push("Beep!")
    }
    else {
      output.push(i);
    }
  }
}
// const array = addNumsBelowInput(number);

// function replaceOnesWithBeep(number) {
//   let oneNumber = addNumsBelowInput(number);
//   for (let i = 0; i <= number; i++) {
//     if(i === 1);
//     return "Beep!"
//   }
// }

// function replaceTwosWithBoop(number) {
//   for (let i = 0; i <= number; i++) {
//     if(i === 2);
//     return "Boop!"
//   }
// }

// function replaceThreesWithNeighbor(number) {
//   for (let i = 0; i <= number; i++) {
//     if(i === 3);
//     return "Won't you be my Neighbor?"
//   }
// }



// UI Logic
window.addEventListener("load", function() {
  const form = document.getElementById("numberInput");
  form.addEventListener("submit", myNeighbor);
})