// Business Logic
function myNeighbor(event) {
  event.preventDefault();
  console.log(event + " this is the event info")
  let number = document.getElementById("userNum").value;
  let result = [];
  for (let i = 0; i <= number; i++) {
    let number = i.toString();

    if (number.includes("3")) {
      result.push("Won't you be my neighbor?");
    }
    else if (number.includes("2")) {
      result.push("Boop!");
    }
    else if (number.includes("1")) {
      result.push("Beep!")
    } else {
      result.push(i);
    }
  }
  console.log(result + "-result")
  outputResults(result);
}
function outputResults(result) {
  let resultString = "";
  for (let i = 0; i < result.length; i++) {
      resultString += result[i];
      resultString += "<br>";
    } 
      document.getElementById("output").innerHTML = resultString;
  }

// UI Logic
window.addEventListener("load", function() {
  const form = document.getElementById("form");
  form.addEventListener("submit", myNeighbor);
})