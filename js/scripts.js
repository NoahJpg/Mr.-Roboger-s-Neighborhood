



// Business Logic

function splitIntoArray(number) {
  return Array.from(String(number), Number)
}

function addNumsBelowInput(number) {
  let numArray = splitIntoArray(number)
  forEach(number)
  return numArray;
}



// UI Logic
window.addEventListener("load", function() {
  const form = document.getElementById("numberInput");
  form.addEventListener("submit", mrRoboger);
});