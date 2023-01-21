// Business Logic
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


// UI Logic
function outputResults () {
  let resultString = "";
  for (let i = 0; i <= result.length; i++) {
      resultString += result[i];
    } 
      document.getElementById("output").innerHTML = resultString;
  }

window.addEventListener("load", function() {
  form.addEventListener("submit", myNeighbor, outputResults);
})