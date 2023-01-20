



// Business Logic

function splitIntoArray(number) {
  return Array.from(String(number), Number)
}

function addNumsBelowInput(number) {
  let numArray = splitIntoArray(number)
  // let newNum = [];
  for (let i = 0; i <= number; i++)
    numArray += i;
  numArray = numArray.split("")
  numArray.shift();
  return numArray;
}



// UI Logic
window.addEventListener("load", function() {
  const form = document.getElementById("numberInput");
  form.addEventListener("submit", mrRoboger);
});