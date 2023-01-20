

// Business Logic
function splitIntoArray(number) {
  return Array.from(String(number), Number)
}

function addNumsBelowInput(number) {
  let numArray = splitIntoArray(number)
  for (let i = 0; i <= number; i++)
    numArray += i;
  numArray = numArray.split("")
  numArray.shift();
  return numArray;
}

function replaceOnesWithBeep(number) {
  let oneNumber = addNumsBelowInput(number);
  for (let i = 0; i <= number; i++) {
    if(i === 1);
    return "Beep!"
  }
}

function replaceTwosWithBoop(number) {
  for (let i = 0; i <= number; i++) {
    if(i === 2);
    return "Boop!"
  }
}

function replaceThreesWithNeighbor(number) {
  for (let i = 0; i <= number; i++) {
    if(i === 3);
    return "Won't you be my Neighbor?"
  }
}

function myNeighbor(number) {
  addNumsBelowInput(number);
  replaceThreesWithNeighbor(number)
  replaceTwosWithBoop(number)
  replaceOnesWithBeep(num)
  return number;
}




// UI Logic
window.addEventListener("load", function() {
  const form = document.getElementById("numberInput");
  form.addEventListener("submit", myNeighbor);
})