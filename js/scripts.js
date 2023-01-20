

//Utility Logic

function splitIntoArray(number) {
  return Array.from(String(number), Number)
}


// Business Logic
function addNumsBelowInput(number) {
  let numArray = splitIntoArray(number)
  // let newNum = [];
  for (let i = 0; i <= number; i++)
    numArray += i;
  numArray = numArray.split("")
  numArray.shift();
  return numArray;
}

function replaceOnesWithBeep(number) {
  for (let i = 1; i <= number; i++) {
    if(i % 1 === 0);
    return "Beep!"
  }
}

function replaceTwosWithBoop(number) {
  for (let i = 1; i <= number; i++) {
    if(i % 2 === 0);
    return "Boop!"
  }
}

function replaceThreesWithNeighbor(number) {
  for (let i = 1; i <= number; i++) {
    if(i % 3 === 0);
    return "Won't you be my Neighbor?"
  }
}



// UI Logic
window.addEventListener("load", function() {
  const form = document.getElementById("numberInput");
  form.addEventListener("submit", mrRoboger);
});