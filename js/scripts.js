

// Business Logic
// function splitIntoArray(number) {
//   let userInput = parseInt(document.querySelector("input#userInput").value);
//   let numberArray = [];
//   numberArray.push(number); 
//   return numberArray;
// }

// function addNumsBelowInput(number) {
//   let numArray = splitIntoArray()
//   for (let i = 0; i <= number; i++)
//     numArray += i;
//   numArray = numArray.split("1");

//   return numArray;
// }

function myNeighbor() {
  let number = document.getElementById("userNum").value;
  let result = [];
  console.Log(result + " -result");
  for (let i = 0; i <= number; i++) {
    if (i.toString().includes("1")) {
      result.push("Beep!")
    }
    else if (i.toString().includes("2")) {
      result.push("Boop!");
    }
  }
}

let output = "";
for (let i = 0; i <= result.length0; i++) {
    output += result[i];
}


// UI Logic

// document.getElementById("result").innerHTML = resultString;
// window.addEventListener("load", function() {
//   const form = document.getElementById("numberInput");
//   form.addEventListener("submit", myNeighbor);
// })


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



