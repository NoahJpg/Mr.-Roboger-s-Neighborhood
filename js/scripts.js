

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
  for (let i = 0; i <= number; i++) {
    let number = i.toString();
    if (number.includes("1")) {
      result.push("Beep!")
    }
    else if (number.includes("2")) {
      result.push("Boop!");
    }
    else if (number.includes("3")) {
      result.push("Won't you be my neighbor?");
    }
    else {
      result.push(i);
    }
  }
}
function outputResults () {
  let resultString = "";
  for (let i = 0; i <= result.length; i++) {
      resultString += result[i];
      document.getElementById("output").innerHTML = resultString;
    }
  }

// UI Logic
window.addEventListener("load", function() {
  form.addEventListener("submit", myNeighbor, outputResults);
})


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



